import RatingComponent from "@/pages/quizzes/create/components/editor/RatingComponent";
import TrueOrFalseComponent from "@/pages/quizzes/create/components/editor/TrueOrFalseComponent";
import type { OptionItem, QuestionItem } from "@/pages/quizzes/create/types";
import { QuestionType } from "@/pages/quizzes/create/types";
import CustomComponent from "@/pages/quizzes/create/components/editor/CustomComponent";
import OptionsOperateComponent from "@/pages/quizzes/create/components/editor/OptionsOperateComponent";

interface OptionContentProps {
  options: OptionItem[]
  question: QuestionItem
  order: number
  className: string
}

const OptionContentComponent = (props: OptionContentProps) => {
  const optionComponent = () => {
    if (props.question.type === QuestionType.TrueOrFalse) {
      return (
        <TrueOrFalseComponent
          question={props.question}
          options={props.options}
          order={props.order}
        />
      )
    } else if (props.question.type === QuestionType.Rating) {
      return (
        <RatingComponent
          question={props.question}
          options={props.options}
          order={props.order}
        />
      )
    } else {
      return (
        <CustomComponent
          question={props.question}
          options={props.options}
          order={props.order}
        />
      )
    }
  }
  return (
    <div className={props.className}>
      {optionComponent()}
      <OptionsOperateComponent
        question={props.question}
        className={''}
        type={props.question.type}
      />
    </div>
  )
}

export default OptionContentComponent
