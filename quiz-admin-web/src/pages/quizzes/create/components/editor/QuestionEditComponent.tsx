import type { QuestionItem } from '@/pages/quizzes/create/types'
import styled from '@/pages/quizzes/create/components/editor/question.module.css'
import classNames from 'classnames'
import QuestionContentComponent from '@/pages/quizzes/create/components/editor/QuestionContentComponent'
import { Button } from 'antd'
import OptionContentComponent from '@/pages/quizzes/create/components/editor/OptionContentComponent'
import { QuestionCommonOperate } from '@/pages/quizzes/create/components/editor/QuestionCommonOperate'
import { useQuizzesCreatedStore } from '@/pages/quizzes/create/store'
import type { ChangeEvent } from 'react'
import { RiDeleteBin3Line } from "react-icons/ri";

export interface QuestionEditProps {
  question: QuestionItem
  questionCount: number
}

function QuestionEditComponent(props: QuestionEditProps) {
  const question = props.question
  const swapQuestionOrder = useQuizzesCreatedStore(
    state => state.swapQuestionOrder
  )
  const removeQuestion = useQuizzesCreatedStore(state => state.removeQuestion)
  const onSelectChange = (
    index: number,
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const value = Number.parseInt(event.target.value) - 1
    if (value === index) return
    swapQuestionOrder(index, value)
  }
  return (
    <div key={`item-${question.id}`} className={classNames(styled.questionContainer,'bg-black/20')}>
      <div className='ml-3'>
        <select
          className={classNames(
            'select',
            'select-sm',
            'bg-black-main',
            'pl-2',
            'mt-[36px]',
            styled.questionOrder
          )}
          value={(question.order + 1).toString()}
          onChange={e => onSelectChange(question.order, e)}
        >
          {Array(props.questionCount)
            .fill(0)
            .map((_, index) => (
              <option key={index.toString()}>{index + 1}</option>
            ))}
        </select>
      </div>
      <QuestionContentComponent
        classNames={styled.questionTitle}
        question={question}
        count={props.questionCount}
      />
      <div
        className={classNames(styled.questionRmAndReset, 'flex mt-[36px]', 'flex-col')}
      >
        <Button
          size='small'
          onClick={e => removeQuestion(question.order)}
          style={{ padding: 0, width: '34px', height: '34px' }}
        >
          <RiDeleteBin3Line></RiDeleteBin3Line>
        </Button>
      </div>
      <OptionContentComponent
        className={styled.questionOptions}
        options={question.options}
        order={question.order}
        question={question}
      />
      <QuestionCommonOperate
        classNames={styled.questionOperate}
        question={question}
        order={question.order}
      />
    </div>
  )
}

export default QuestionEditComponent
