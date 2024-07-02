import type { ChangeEvent, ReactElement } from 'react'
import React, { useRef, useState } from 'react'
import CheckUtils from '@/utils/checkutils'

export interface OptionInputProps {
  content?: string
  scoring?: number
  onChanged?: (value: { content?: string; score?: number }) => void
  onCheckboxChanged?: (checked: boolean) => void
  checked: boolean
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

  const editDoneClick = () => {
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
    <div className='flex flex-row gap-2 items-center h-8'>
      <input
        type='checkbox'
        checked={props.checked}
        className='checkbox checkbox-sm'
        ref={inputText}
        onChange={onInputChange}
      />
      {editContent ? (
        <div className='flex gap-2 items-center'>
          <input
            type='text'
            defaultValue={props.content}
            ref={inputText}
            className='p-1 rounded-sm'
          />
          <div className='flex gap-1 items-center'>
            <span>Score</span>
            <input
              ref={scoringText}
              type='text'
              defaultValue={props.scoring}
              className='p-1 w-12 rounded-sm'
            />
          </div>
          <button
            type='button'
            className='text-blue-400 ml-2'
            onClick={editDoneClick}
          >
            Done
          </button>
        </div>
      ) : (
        <span className='cursor-pointer' onClick={() => setEditContent(true)}>
          {props.content}
        </span>
      )}
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
      className={`flex gap-6 ${props.orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
    >
      {React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
          ...child.props,
          checked: index === checkedIndex,
          onChanged: (value: { content?: string; score?: number }) => props.onChanged(index, value),
          onCheckboxChanged: (checked: boolean) =>
            onCheckChanged(index, checked),
        })
      })}
    </div>
  )
}

export { OptionInputComponent, OptionInputGroup }
