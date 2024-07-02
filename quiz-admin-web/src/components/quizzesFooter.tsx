import { FormattedMessage } from "react-intl";
import { MessageKeys } from '@/locales'

export interface QuizzesFooterProps {
  count: number
  index: number
  classNames?: string
  onPageClick: (index: number) => void
}
const QuizzesFooter = (props: QuizzesFooterProps) => {
  return (
    <div className={`flex flex-row justify-between gap-10  ${props.classNames}`}>
      <button
        type='button'
        className={`${props.index === 0 ? 'hidden' : 'btn'} rounded-full bg-black-second flex-grow hover:bg-black-hover`}
        onClick={() => {
          props.onPageClick(props.index - 1)
        }}
      >
        <FormattedMessage id={MessageKeys.global.previous}></FormattedMessage>
      </button>
      <button
        type='button'
        className={`${props.index === props.count ? 'hidden' : 'btn'} rounded-full bg-black-second flex-grow hover:bg-black-hover`}
        onClick={() => {
          props.onPageClick(props.index + 1)
        }}
      >
        <FormattedMessage id={MessageKeys.global.next}></FormattedMessage>
      </button>
    </div>
  )
}

export default QuizzesFooter
