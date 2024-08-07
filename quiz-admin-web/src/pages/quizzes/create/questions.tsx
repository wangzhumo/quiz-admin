import QuizzesFooter from '@/components/quizzesFooter'
import { QuestionComponent } from '@/pages/quizzes/create/components/QuestionComponent'
import { useQuizzesCreatedStore } from '@/pages/quizzes/create/store'
import type { CommonTabProps, QuestionItem } from '@/pages/quizzes/create/types'
import { GenerateComponent } from './components/editor/GenerateComponent'

function QuestionsTab(props: CommonTabProps) {
  const questions = useQuizzesCreatedStore(state => state.questions)
  const onGenerateQuestion = (question: QuestionItem[]) => {
    // insert to data.
  }
  return (
    <div className='w-full h-full flex flex-col mt-6 pb-14  pt-4 gap-5'>
      <QuestionComponent
        onGenerateQuestion={onGenerateQuestion}
        questions={questions}
      />
      <GenerateComponent questions={questions} />
      <QuizzesFooter {...props} onPageClick={props.onChangePage} />
    </div>
  )
}

export default QuestionsTab
