import type { ChangeEvent, ReactElement } from "react";
import React, { useRef, useState } from "react";
import { ChooseOperateComponent } from "@/pages/quizzes/create/components/editor/OptionOperateComponent";
import CheckUtils from "@/utils/checkutils";
import classNames from "classnames";

export interface OptionInputProps {
  content?: string
  scoring?: number
  onChanged?: (value: { content?: string; score?: number }) => void
  onCheckboxChanged?: (checked: boolean) => void
  checked: boolean
  showAddMin: boolean
}

const OptionInputComponent = (props: OptionInputProps) => {
  const [editContent, setEditContent] = useState(false)
  const inputText = useRef<HTMLInputElement>(null)
  const scoringText = useRef<HTMLInputElement>(null)
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    if (checked !== undefined && props.checked !== checked) {
      props.onCheckboxChanged?.(checked)
    }
  }

  const editDoneClick = (index: number) => {
    const inputTextVal = inputText.current?.value
    const inputScoreVal = scoringText.current?.value ?? '0'
    let changeValue = {}
    if (CheckUtils.isNotEmpty(inputTextVal) && props.content !== inputTextVal) {
      changeValue = {
        content: inputTextVal
      }
    }
    if (
      CheckUtils.isNotEmpty(inputScoreVal) &&
      props.scoring !== Number.parseInt(inputScoreVal)
    ) {
      changeValue = {
        ...changeValue,
        score: Number.parseInt(inputScoreVal)
      }
    }
    if (Object.keys(changeValue).length > 0) {
      props.onChanged?.(changeValue)
    }
    setEditContent(false)
  }

  return (
    <div
      className='flex flex-row gap-2 items-center cursor-pointer h-8 group'
      onClick={() => editContent ? null : setEditContent(true)}
    >
      <input
        type='checkbox'
        checked={props.checked}
        className='checkbox checkbox-sm'
        ref={inputText}
        onChange={onInputChange}
      />
      <span
        className={classNames('cursor-pointer', editContent ? 'hidden' : '')}
        onClick={() => setEditContent(true)}
      >
        {`${props.content}  `}
        <mark className='bg-transparent text-blue-400'>{`(${props.scoring ?? 0})`}</mark>
      </span>
      <div className={`flex gap-2 items-center flex-1 ${editContent ? '' : 'pointer-events-none'}`}>
        <input
          type='text'
          defaultValue={props.content}
          ref={inputText}
          className={`p-1 rounded-sm ${editContent ? '' : 'hidden'}`}
        />
        <div
          className={`flex gap-1 items-center ${editContent ? 'flex' : 'hidden'}`}
        >
          <span>Score</span>
          <input
            ref={scoringText}
            type='text'
            defaultValue={props.scoring}
            className='p-1 w-12 rounded-sm'
          />
        </div>
        <ChooseOperateComponent
          className={`w-full flex-grow justify-end ${editContent ? 'flex' : 'hidden'} group-hover:flex`}
          option={{
            content: 'Option 1',
            order: 0,
            scoring: 1,
          }}
          showAddMin={props.showAddMin}
          onDone={editDoneClick}
          index={0}
        ></ChooseOperateComponent>
      </div>
    </div>
  )
}

export interface OptionInputGroupProps {
  children: ReactElement<OptionInputProps>[]
  onCheckChanged?: (index: number, checked: boolean) => void
  mustChecked?: boolean
  onChanged: (
    index: number,
    value: { content?: string; score?: number }
  ) => void
  orientation?: 'vertical' | 'horizontal'
}
// always select one option.
const OptionInputGroup = (props: OptionInputGroupProps) => {
  const [checkedIndex, setCheckedIndex] = useState(-1)
  const onCheckChanged = (index: number, checked: boolean) => {
    if (checked && index !== checkedIndex) {
      setCheckedIndex(index)
    }
    // check change
  }
  return (
    <div
      className={`flex ${props.orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
    >
      {React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
          ...child.props,
          checked: index === checkedIndex,
          onChanged: (value: { content?: string; score?: number }) =>
            props.onChanged(index, value),
          onCheckboxChanged: (checked: boolean) =>
            onCheckChanged(index, checked)
        })
      })}
    </div>
  )
}

export { OptionInputComponent, OptionInputGroup }
