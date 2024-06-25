import { FormattedMessage, useIntl } from 'react-intl'
import { MessageKeys } from '@/locales'
import NormalInput from '@/components/input/normalInput'
import MarkdownEditor from "@/components/markdown/markdown";
import { DatePicker } from "antd";
import ImagePicker from "@/components/image/picker";



const OverviewTab = () => {
  const { formatMessage: f } = useIntl()
  return (
    <div className='w-full h-full  mt-6 pt-4'>
      <div className='text-2xl mb-3'>
        <FormattedMessage id={MessageKeys.global.name} />
      </div>
      <div className='h-12 flex items-center mb-9'>
        <NormalInput
          showDeleteIcon={false}
          showCount
          maxLength={80}
          placeholder={f({ id: MessageKeys.quizzes.baseTab.namePlaceholder })}
        />
      </div>
      <div className='text-2xl mb-3 mt-8'>
        <FormattedMessage id={MessageKeys.global.desc} />
      </div>
      <div className='h-80 w-full mb-9 border-1 border-line rounded-[6px] overflow-auto' >
        <MarkdownEditor markdown={"# Hello world"}/>
      </div>
      <div className='text-2xl mb-3 mt-8'>
        <FormattedMessage id={MessageKeys.global.date} />
      </div>
      <div className='flex gap-5 justify-between flex-row w-full mb-9 pt-3 pb-3 pr-4 pl-4 border-1 border-line rounded-[6px] overflow-auto' >
        <div className="flex flex-col flex-1 gap-2">
          <span className="text-secondary"><FormattedMessage id={MessageKeys.quizzes.baseTab.startAt} /></span>
          <DatePicker></DatePicker>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <span className="text-secondary"><FormattedMessage id={MessageKeys.quizzes.baseTab.endAt} /></span>
          <DatePicker></DatePicker>
        </div>
      </div>
      <div className='text-2xl mb-3 mt-8'>
        <FormattedMessage id={MessageKeys.quizzes.baseTab.banner} />
      </div>
      <ImagePicker />
      <div className="flex"></div>
    </div>
  )
}

export default OverviewTab
