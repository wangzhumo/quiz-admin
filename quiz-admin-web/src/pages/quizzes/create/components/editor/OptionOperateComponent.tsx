import type { OptionItem } from "@/pages/quizzes/create/types";
import { Button } from "antd";
import { GrAddCircle, GrImage, GrLinkUp, GrSubtractCircle } from "react-icons/gr";
import classNames from "classnames";
import { MdOutlineDoneAll } from "react-icons/md";

export interface OptionOperateProps {
  option: OptionItem,
  index: number,
  onRemove?: (index: number) => void,
  onDone?: (index: number) => void,
  onAddOption?: (index: number) => void,
  onImageInput?: (index: number) => void,
  onMoveUp?: (index: number) => void,
  className?: string,
  showAddMin: boolean
}

function ChooseOperateComponent(props: OptionOperateProps) {
  return (
    <div className={classNames('flex',props.className)}>
      <Button
        size={'small'}
        type={'text'}
        ghost={true}
        onClick={e => props.onDone?.(props.index)}
        icon={<MdOutlineDoneAll></MdOutlineDoneAll>}
      ></Button>
      <Button
        size={'small'}
        type={'text'}
        ghost={true}
        onClick={e => props.onMoveUp?.(props.index)}
        icon={<GrLinkUp></GrLinkUp>}
      ></Button>
      <Button
        size={'small'}
        type={'text'}
        ghost={true}
        rootClassName={`${props.showAddMin ? "" : "hidden"}`}
        onClick={e => props.onAddOption?.(props.index)}
        icon={<GrAddCircle></GrAddCircle>}
      ></Button>
      <Button
        size={'small'}
        type={'text'}
        ghost={true}
        rootClassName={`${props.showAddMin ? "" : "hidden"}`}
        onClick={e => props.onRemove?.(props.index)}
        icon={<GrSubtractCircle></GrSubtractCircle>}
      ></Button>
      <Button
        size={'small'}
        type={'text'}
        ghost={true}
        onClick={e => props.onImageInput?.(props.index)}
        icon={<GrImage></GrImage>}
      ></Button>
    </div>
  )
}

function RatingOperateComponent(props: OptionOperateProps) {
  return <div></div>
}

export { ChooseOperateComponent, RatingOperateComponent }
