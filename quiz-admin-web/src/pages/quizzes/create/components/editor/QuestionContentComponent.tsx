import { useQuizzesCreatedStore } from "@/pages/quizzes/create/store";
import type { QuestionItem } from "@/pages/quizzes/create/types";
import classnames from "classnames";
import { produce } from "immer";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {  GrImage } from "react-icons/gr";
import { Button } from "antd";

interface QuestionContentProps {
  question: QuestionItem
  count: number // total question count
  classNames?: string
}

const QuestionContentComponent = (props: QuestionContentProps) => {
  const [editTitle, setEditTitle] = useState(false)
  const updateQuestion = useQuizzesCreatedStore(state => state.updateQuestion)

  const textAreaTitleRef = useRef<HTMLTextAreaElement>(null)
  const onTextareaFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    updateQuestion(
      produce(props.question, draft => {
        draft.title = event.target.value
        return draft
      })
    )
    setEditTitle(!editTitle)
  }

  useEffect(() => {
    if (editTitle) {
      textAreaTitleRef.current?.focus()
    }
  }, [editTitle]);

  const onDivClick = (event: MouseEvent<HTMLDivElement>) => {
    setEditTitle(!editTitle)
  }

  return (
    <div className={classnames('w-full overflow-hidden ',editTitle ? 'mt-0': 'mt-[36px]', props.classNames)} onClick={editTitle ? undefined : onDivClick}>
      {editTitle ? (
        <div className='flex flex-col' >
          <Button size={'small'} type={'text'}  icon={<GrImage></GrImage>}></Button>
          <textarea
            className='flex-grow rounded-lg leading-7 text-lg'
            ref={textAreaTitleRef}
            onBlur={onTextareaFocus}
            defaultValue={props.question.title}
          ></textarea>
        </div>
      ) : (
        <span className='text-wrap break-words cursor-pointer min-h-8 leading-7 text-lg'>
              {props.question.title}
        </span>
      )}
    </div>
  )
}

export default QuestionContentComponent
