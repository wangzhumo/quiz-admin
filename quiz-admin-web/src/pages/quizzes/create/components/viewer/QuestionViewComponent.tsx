import { useQuizzesCreatedStore } from '../../store'
import type { QuestionItem } from '../../types'
import OperateViewComponent from './OperateViewComponent'
import OptionsViewComponent from './OptionsViewComponent'
import styled from './question.module.css'
import { Image } from 'antd'
import classNames from 'classnames'
import CheckUtils from '@/utils/checkutils'
import { produce } from 'immer'

export interface QuestionViewProps {
  question: QuestionItem
}

function QuestionViewComponent(props: QuestionViewProps) {
  const question = props.question
  const updateQuestion = useQuizzesCreatedStore(state => state.updateQuestion)
  const callback = (question: QuestionItem) => {
    updateQuestion(
      produce(question, draft => {
        draft.edit = true
      })
    )
  }

  return (
    <div
      onClick={e => callback(question)}
      key={`view-question-${question.id}`}
      className={classNames(
        styled.questionViewContainer,
        'group hover:border-gray-500 border-t-1 border-b-1 border-dashed border-line pt-[36px]'
      )}
    >
      <div
        className={classNames(styled.questionViewOrder, 'flex justify-center')}
      >
        <span
          className={classNames(
            'block min-h-8 leading-7 text-lg text-error mt-1',
            `${question.ignore ? 'hidden' : ''}`
          )}
        >
          *
        </span>
        <span className='block min-h-8 leading-7 text-lg'>
          {question.order + 1}
        </span>
      </div>
      <div className={styled.questionViewTitle}>
        <span className='text-wrap break-words  block min-h-8 leading-7 text-lg'>
          {question.title}
        </span>
      </div>
      <span
        className={classNames(
          'text-wrap break-words text-secondary leading-7',
          styled.questionViewDesc,
          `${CheckUtils.isNotEmpty(question.description) ? '' : 'flex'}`
        )}
      >
        {question.description}
      </span>
      <Image
        rootClassName={classNames(
          `${CheckUtils.isNotEmpty(question.img) ? '' : 'hidden'}`,
          styled.questionViewImage
        )}
        src={question.img}
      />
      <OptionsViewComponent
        question={question}
        className={styled.questionViewOptions}
      />
      <OperateViewComponent
        question={question}
        className={classNames(
          styled.questionViewOperate,
          'group-hover:h-[48px]'
        )}
      />
    </div>
  )
}

export default QuestionViewComponent
