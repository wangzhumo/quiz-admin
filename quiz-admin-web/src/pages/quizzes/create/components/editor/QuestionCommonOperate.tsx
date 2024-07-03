import classNames from "classnames";
import { Button, ConfigProvider, Switch, Tooltip } from "antd";
import { RiLink } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { PiQuestionThin } from "react-icons/pi";
import { useQuizzesCreatedStore } from "@/pages/quizzes/create/store";
import type { QuestionItem } from "@/pages/quizzes/create/types";
import { produce } from "immer";
import type { MouseEvent } from "react";

export interface QuestionCommonProps {
  order: number
  classNames?: string
  question: QuestionItem
}

export const QuestionCommonOperate = (props: QuestionCommonProps) => {
  const updateQuestion = useQuizzesCreatedStore(state => state.updateQuestion)
  const handleLink = () => {}
  const handleDone = () => {
    updateQuestion(
      produce(props.question, draft => {
        draft.edit = false
        return draft
      })
    )
  }

  const onSwitchChange = (
    checked: boolean,
    event: MouseEvent<HTMLButtonElement>
  ) => {
    // updateDefaultOption(
    //   produce(props.defaultOption, draft => {
    //     draft.orientation = checked ? 'vertical' : 'horizontal'
    //   })
    // )
  }
  return (
    <div
      className={classNames(
        'flex flex-row h-12 pl-2 mt-2 pr-2 justify-end items-center gap-4 bg-black/70',
        props.classNames
      )}
    >
      <Button
        size='small'
        type={'text'}
        onClick={() => handleLink()}
        icon={<RiLink></RiLink>}
      >
        Option Link
      </Button>
      <div className='flex-1'></div>
      <div className='flex items-center gap-1'>
        <ConfigProvider
          theme={{
            components: {
              Switch: {
                handleSizeSM: 16,
                trackHeightSM: 20,
                trackPadding: 2
              }
            }
          }}
        >
          <Switch
            rootClassName=''
            checkedChildren={
              <span className='flex h-5 justify-center items-center'>
                Exclude
              </span>
            }
            unCheckedChildren={
              <span className='flex h-5 justify-center items-center'>
                Include
              </span>
            }
            defaultChecked={false}
            size={'small'}
            onChange={onSwitchChange}
          />
        </ConfigProvider>
        <Tooltip
          color='rgb(0 0 0 / 0.9)'
          title='Disregarding current issues will not be taken into account in overall scores.'
        >
          <PiQuestionThin />
        </Tooltip>
      </div>
      <Button
        size='small'
        type={'link'}
        onClick={() => handleDone()}
        icon={<IoCheckmarkDoneCircleOutline></IoCheckmarkDoneCircleOutline>}
      >
        Done
      </Button>
    </div>
  )
}
