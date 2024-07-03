import type { QuestionItem } from "@/pages/quizzes/create/types";
import { QuestionType } from "@/pages/quizzes/create/types";
import classNames from "classnames";
import type { MouseEvent } from "react";
import { Fragment } from "react";
import { Button, ConfigProvider, Switch } from "antd";
import { GrAdd } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";

export interface OptionsOperateProps {
  question: QuestionItem
  className: string
  type: QuestionType
}

function ChooseOptionsOperate(props: OptionsOperateProps) {
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
    <div
      className={classNames(
        props.className,
        `${props.type !== QuestionType.Rating ? 'flex' : 'hidden'}`,
        'items-center'
      )}
    >
      <Button type={'link'} size={'small'} icon={<GrAdd></GrAdd>}>
        Add Option
      </Button>
      <div className='flex-1'></div>
      <Button type={'text'} size={'small'} icon={<BiEdit></BiEdit>}>
        Multiple Edit
      </Button>
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
              Vertical
            </span>
          }
          unCheckedChildren={
            <span className='flex h-5 justify-center items-center'>
              Horizontal
            </span>
          }
          defaultChecked={false}
          size={'small'}
          onChange={onSwitchChange}
        />
      </ConfigProvider>
    </div>
  )
}

function RatingOptionsOperate(props: OptionsOperateProps) {
  return (
    <div
      className={classNames(
        props.className,
        'h-9 items-center',
        `${props.type === QuestionType.Rating ? 'flex' : 'hidden'}`
      )}
    >
      <Button type={'link'} size={'small'}>
        Option Settings
      </Button>
      <div className='flex-1'></div>
      <select className='select select-sm w-[38] bg-transparent'>
        <option disabled selected>
          Rating Count
        </option>
        <option>Rating Count:1</option>
        <option>Rating Count:2</option>
        <option>Rating Count:3</option>
        <option>Rating Count:4</option>
        <option>Rating Count:5</option>
        <option>Rating Count:6</option>
        <option>Rating Count:7</option>
        <option>Rating Count:8</option>
        <option>Rating Count:9</option>
        <option>Rating Count:10</option>
      </select>
      <select className='select select-sm w-17 bg-transparent'>
        <option disabled selected>
          Style
        </option>
        <option>Default</option>
        <option>Number</option>
      </select>
      <select className='select select-sm w-17 bg-transparent'>
        <option disabled selected>
          Ignore
        </option>
        <option>Center</option>
        <option>All</option>
      </select>
    </div>
  )
}

function OptionsOperateComponent(props: OptionsOperateProps) {
  return (
    <Fragment>
      <ChooseOptionsOperate {...props}></ChooseOptionsOperate>
      <RatingOptionsOperate {...props}></RatingOptionsOperate>
    </Fragment>
  )
}

export default OptionsOperateComponent
