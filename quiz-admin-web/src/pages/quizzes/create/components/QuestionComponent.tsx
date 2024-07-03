import type { QuestionItem } from "@/pages/quizzes/create/types";
import QuestionViewComponent from "@/pages/quizzes/create/components/viewer/QuestionViewComponent";
import QuestionEditComponent from "@/pages/quizzes/create/components/editor/QuestionEditComponent";

interface QuestionComponentProps {
  onGenerateQuestion: (question: QuestionItem[]) => void
  questions: QuestionItem[]
}

export const QuestionComponent = (props: QuestionComponentProps) => {
  return (
    <div className='flex flex-col mt-6'>
      <div className='mockup-browser w-full bg-black/30 overflow-hidden'>
        <div className='mockup-browser-toolbar'>
          <div className='input'>https://wangzhumo.com/quizzes</div>
        </div>
        <div className='flex-col gap-4'>
          {props.questions.map((question, index) => {
            if (question.edit) {
              return (
                <QuestionEditComponent
                  question={question}
                  questionCount={props.questions.length}
                />
              )
            } else {
              return <QuestionViewComponent question={question} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
