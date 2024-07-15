import type { ResultItem } from "@/pages/quizzes/create/types";
import NormalInput from "@/components/input/normalInput";
import MarkdownEditor from "@/components/markdown/markdown";
import { GrLinkUp } from "react-icons/gr";
import { Button, ConfigProvider, Switch, Tooltip } from "antd";
import { RiDeleteBin3Line } from "react-icons/ri";
import type { MouseEvent } from "react";
import { AiOutlineQuestion } from "react-icons/ai";

const ResultItemComponent = (props: ResultItem) => {
  const onSwitchChange = (
    checked: boolean,
    event: MouseEvent<HTMLButtonElement>
  ) => {
    // updateDefaultOption(
    //   produce(props.defaultOption, draft => {
    //     draft.orientation = checked ? 'vertical' : 'horizontal'
    //   })
    // )
  }
  return (
    <div className='w-full rounded-xl bg-black/20 flex flex-col text-white px-4 py-5 gap-4'>
      <span className='text-lg'>Result Name</span>
      <NormalInput showDeleteIcon={false} ></NormalInput>
      <span className='text-lg'>Result Data</span>
      <div className='min-h-80 w-full border-1 border-line rounded-[6px] overflow-auto'>
        <MarkdownEditor markdown={'# Hello world'} />
      </div>
      <div className='flex flex-row'>
        <div className='flex items-center gap-1'>
          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  handleSizeSM: 16,
                  trackHeightSM: 20,
                  trackPadding: 2
                }
              }
            }}
          >
            <Switch
              rootClassName=''
              checkedChildren={
                <span className='flex h-5 justify-center items-center'>
                UnLock
              </span>
              }
              unCheckedChildren={
                <span className='flex h-5 justify-center items-center'>
                Lock
              </span>
              }
              defaultChecked={false}
              size={'small'}
              onChange={onSwitchChange}
            />
          </ConfigProvider>
          <Tooltip
            color='rgb(0 0 0 / 0.9)'
            title='Paid for unlock content.'
          >
            <AiOutlineQuestion />
          </Tooltip>
        </div>
        <div className='flex-grow'></div>
        <Button
        size={'small'}
        type={'text'}
        icon={<GrLinkUp></GrLinkUp>}
      >Up</Button>
        <Button
          size={'small'}
          type={'text'}
          icon={<RiDeleteBin3Line></RiDeleteBin3Line>}
        >
          Remove
        </Button></div>
    </div>
  )
}

export default ResultItemComponent
