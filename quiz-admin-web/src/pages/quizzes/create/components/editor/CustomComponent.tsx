import type { OptionCommonProps } from "./types";
import { useQuizzesCreatedStore } from "@/pages/quizzes/create/store";
import { produce } from "immer";
import { OptionInputComponent, OptionInputGroup } from "@/components/optionInput/OptionInputComponent";

const CustomComponent = (props: OptionCommonProps) => {
  const updateOptions = useQuizzesCreatedStore(state => state.updateOption)

  const onChanged = (
    index: number,
    value: { content?: string; score?: number }
  ) => {
    // options index.
    updateOptions(
      props.order,
      produce(props.options, draft => {
        if (value.content !== null && value.content !== undefined) {
          draft[index].content = value.content
        }
        if (value.score !== null && value.score !== undefined) {
          draft[index].scoring = value.score
        }
        return draft
      })
    )
  }

  return (
    <OptionInputGroup
      orientation={props.question.orientation}
      onChanged={onChanged}
    >
      {props.options.map((value, index) => {
        return (
          <OptionInputComponent
            key={`${value.order}-${index}`}
            checked
            showAddMin={true}
            content={value.content}
            scoring={value.scoring}
          ></OptionInputComponent>
        )
      })}
    </OptionInputGroup>
  )
}

export default CustomComponent;