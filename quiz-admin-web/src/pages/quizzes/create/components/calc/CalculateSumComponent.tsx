import type { CalculateComponentProps } from "./types";
import { useEffect, useState } from "react";
import type { ResultItem } from "@/pages/quizzes/create/types";
import { useQuizzesCreatedStore } from "@/pages/quizzes/create/store";
import { Divider } from "antd";
import EditRuleComponent from "@/pages/quizzes/create/components/calc/EditRuleComponent";
import { produce } from "immer";

function CalculateSumComponent(props: CalculateComponentProps) {
  const [currentResult, setCurrentEditResult] = useState<
    ResultItem | undefined
  >(undefined)

  const updateCalculate = useQuizzesCreatedStore(state => state.updateCalculate)

  useEffect(() => {
    const order = currentResult?.order
    if (order === undefined) return

    // update to store
    const findIndex = props.calculate.match.findIndex(
      v => v.resultOrder === order
    )
    if (findIndex < 0) {
      updateCalculate({
        ...props.calculate,
        match: produce(props.calculate.match, draft => {
          draft.push({
            rules: [],
            resultOrder: order
          })
        })
      })
    }
  }, [currentResult])

  return (
    <div className={`${props.className}`}>
      <span className='text-lg'>Match Result</span>
      <div className='border-1 rounded-lg border-black/50 px-4 py-4 flex flex-col mt-4'>
        <EditRuleComponent
          calculate={props.calculate}
          result={currentResult}
        />
        <Divider />
        <div className='grid grid-cols-4 gap-4'>
          {props.result.map((result, index) => {
            return (
              <div
                key={result.order}
                className={`rounded-lg bg-black/20 p-3 ${currentResult?.name === result.name ? 'bg-black/40' : ''}`}
                onClick={e => setCurrentEditResult(result)}
              >
                <span className='text-base'>{result.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CalculateSumComponent
