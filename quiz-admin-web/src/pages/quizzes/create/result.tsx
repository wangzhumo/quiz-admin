import type { CommonTabProps } from "@/pages/quizzes/create/types";
import QuizzesFooter from "@/components/quizzesFooter";
import { useQuizzesCreatedStore } from "@/pages/quizzes/create/store";
import ResultComponent from "@/pages/quizzes/create/components/result/ResultComponent";

function ResultTab(props: CommonTabProps) {
  const results = useQuizzesCreatedStore(state => state.results)
  const resultAddOrRemove = useQuizzesCreatedStore(
    state => state.resultAddOrRemove
  )

  return (
    <div className='w-full h-full flex flex-col mt-6 pb-14  pt-4 gap-5'>
      <ResultComponent result={results} />
      <button
        type={'button'}
        className='btn w-full h-16 bg-black-second hover:bg-black-hover'
        onClick={e => resultAddOrRemove(false)}
      >
        Add Result
      </button>
      <QuizzesFooter {...props} onPageClick={props.onChangePage} />
    </div>
  )
}

export default ResultTab
