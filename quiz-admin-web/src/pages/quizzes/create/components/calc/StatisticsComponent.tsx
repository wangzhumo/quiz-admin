import type { QuestionItem, Results } from "@/pages/quizzes/create/types";
import { useMemo } from "react";

export interface StatisticsProps {
  question: QuestionItem[]
  result: Results
}

function StatisticsComponent(props:StatisticsProps) {
  const totalOptions = useMemo<number>(() => {
    return 0
  },[])
 return (
   <div className="collapse bg-black-main border-1 rounded-lg border-black/50">
     <input type="checkbox" defaultChecked={true} />
     <div className="collapse-title text-lg">{`Total question : ${props.question.length}`}</div>
     <div className="collapse-content flex flex-col">
       <span>{`Total Options : ${totalOptions}`}</span>
       <span>{`Total Options Min: ${totalOptions}`}</span>
       <span>{`Total Options Max: ${totalOptions}`}</span>
     </div>
   </div>
 );
}

export default StatisticsComponent;