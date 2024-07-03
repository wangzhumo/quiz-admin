import { useQuizzesCreatedStore } from '@/pages/quizzes/create/store'
import { toLines } from '@/pages/quizzes/create/text_process'
import { Divider, Modal, Popover } from 'antd'
import type { ChangeEvent, MouseEvent } from 'react'
import { useRef, useState } from 'react'
import { GrAddCircle, GrDocumentText } from 'react-icons/gr'
import type { QuestionItem, QuestionType } from '../../types'
import { OptionsTypeComponent } from './OptionsTypeComponent'

export interface GenerateComponentProps {
  questions: QuestionItem[]
}

const AddQuestionComponent = (props: {
  onGenTypeClick: (type: QuestionType) => void
  onGenerateQuestion: () => void
}) => {
  const [open, setOpen] = useState(false)
  const hide = () => {
    setOpen(false)
  }
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  return (
    <div className='flex flex-row items-center justify-center'>
      <Popover
        trigger={'hover'}
        open={open}
        onOpenChange={handleOpenChange}
        content={
          <OptionsTypeComponent
            onOptionTypeComponentClick={type => {
              hide()
              props.onGenTypeClick(type)
            }}
          />
        }
      >
        <div className='flex flex-row gap-1 items-center justify-center hover:text-black-hover'>
          <GrAddCircle />
          <span>Add question item</span>
        </div>
      </Popover>
      <Divider
        type={'vertical'}
        className='bg-black-hover m-4'
        dashed={true}
      ></Divider>
      <div
        className='flex flex-row gap-1 items-center justify-center hover:text-black-hover'
        onClick={() => props.onGenerateQuestion()}
      >
        <GrDocumentText /> <span>Add multiple items from text</span>
      </div>
    </div>
  )
}

export const GenerateComponent = (props: GenerateComponentProps) => {
  const [addNewQuestion, generateQuestion] = useQuizzesCreatedStore(state => [
    state.addNewQuestion,
    state.generateQuestion
  ])
  const textInput = useRef<HTMLTextAreaElement>(null)
  const [questionText, setQuestionText] = useState<string[]>([])
  const [genModal, setGenModal] = useState(false)

  const onQuestionTypeClick = (type: QuestionType) => {
    addNewQuestion(type)
  }

  const onGenerateQuestion = () => {
    setGenModal(true)
  }

  const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setGenModal(false)
    const value = textInput.current?.value
    if (value !== undefined && value.length > 0) {
      // props.onGenerateQuestion(questionText)
      generateQuestion(toLines(value))
    }
  }

  const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // setQuestionText
    const lines = toLines(event.target.value)
    setQuestionText(lines)
  }

  // empty create panel
  // generate with text
  // options
  // "default", "primary", "dashed", "link", "text"
  return (
    <div className='border-line border-1 rounded-2xl w-full'>
      <AddQuestionComponent
        onGenerateQuestion={onGenerateQuestion}
        onGenTypeClick={onQuestionTypeClick}
      />
      <Modal
        title={'Generate question form text'}
        centered={true}
        keyboard={true}
        destroyOnClose={true}
        onOk={onButtonClick}
        onCancel={() => setGenModal(false)}
        okText={'Generate'}
        width={900}
        open={genModal}
        cancelText={'Cancel'}
      >
        <div>
          <p className='py-4'>
            Generate questions based on provided texts, with one question per
            line of text.
          </p>
          <textarea
            ref={textInput}
            className='textarea textarea-ghost w-full textarea-bordered h-80'
            placeholder='Enter text'
            minLength={10}
            onChange={onTextareaChange}
          ></textarea>
          <span>{`Generate: ${questionText.length} items`}</span>
        </div>
      </Modal>
    </div>
  )
}
