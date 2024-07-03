import type { QuestionItem } from "../../types";
import { QuestionType } from "../../types";
import classNames from "classnames";
import RatingComponent, { RatingType } from "@/components/rating/RatingComponent";

export interface OptionsViewProps {
  question: QuestionItem
  className: string
  ratingType?: RatingType
}

function TrueFalseViewComponent(props: OptionsViewProps) {
  return (
    <div
      className={classNames(
        `${props.question.type !== QuestionType.TrueOrFalse ? 'hidden' : 'flex'}`,
        `${props.question.orientation === 'vertical' ? 'flex-col' : 'flex-row'}`,
        'gap-3',
        props.className
      )}
    >
      {props.question.options.map(value => {
        return (
          <div
            key={value.order}
            className='flex justify-start items-center gap-2'
          >
            <input
              type='checkbox'
              disabled={true}
              className='checkbox checkbox-sm'
            />
            <span>
              {`${value.content}  `}
              <mark className='bg-transparent text-blue-400'>{`(${value.scoring ?? 0})`}</mark>
            </span>
          </div>
        )
      })}
    </div>
  )
}

function RatingViewComponent(props: OptionsViewProps) {
  return (
    <div
      className={classNames(
        `${props.question.type !== QuestionType.Rating ? 'hidden' : 'flex'}`,
        `${props.question.orientation === 'vertical' ? 'flex-col' : 'flex-row'}`,
        'gap-3',
        props.className
      )}
    >
      <RatingComponent
        content={props.question.options.map(value => value.content ?? '')}
        count={props.question.options.length}
        type={props.ratingType ?? RatingType.Default}
      ></RatingComponent>
    </div>
  )
}

function CustomViewComponent(props: OptionsViewProps) {
  return (
    <div
      className={classNames(
        `${props.question.type !== QuestionType.Matching ? 'hidden' : 'flex'}`,
        `${props.question.orientation === 'vertical' ? 'flex-col' : 'flex-row'}`,
        'gap-3',
        props.className
      )}
    >
      {props.question.options.map(value => {
        return (
          <div
            key={value.order}
            className='flex justify-start items-center gap-2'
          >
            <input
              type='checkbox'
              disabled={true}
              className='checkbox checkbox-sm'
            />
            <span>
              {`${value.content}  `}
              <mark className='bg-transparent text-blue-400'>{`(${value.scoring ?? 0})`}</mark>
            </span>
          </div>
        )
      })}
    </div>
  )
}

function OptionsViewComponent(props: OptionsViewProps) {
  return (
    <div className={classNames(props.className)}>
      <TrueFalseViewComponent {...props}></TrueFalseViewComponent>
      <RatingViewComponent {...props}></RatingViewComponent>
      <CustomViewComponent {...props}></CustomViewComponent>
    </div>
  )
}

export { RatingViewComponent, TrueFalseViewComponent, CustomViewComponent }

export default OptionsViewComponent
