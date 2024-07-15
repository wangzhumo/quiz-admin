import type { ResultItem } from "@/pages/quizzes/create/types";
import ResultItemComponent from "@/pages/quizzes/create/components/result/ResultItemComponent";

interface ResultComponentProps {
  result: ResultItem[]
}

const ResultComponent = (props: ResultComponentProps) => {
  return (
    <div className='flex flex-col gap-6'>
      {props.result.map((value, index) => {
        return <ResultItemComponent key={value.order} {...value} />
      })}
    </div>
  )
}

export default ResultComponent
