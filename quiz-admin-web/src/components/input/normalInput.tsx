import styled from './normalInput.module.css'
import classNames from 'classnames'
import { Input } from 'antd'
import type { InputProps, InputRef } from 'antd'
import { forwardRef, type ReactNode } from 'react'
import type { InputStatus } from 'antd/es/_util/statusUtils'
import { HoverImage } from '@/components/hover/hoverImage'
import grayCloseIcon from '@assets/icons/icon-close-gray.svg'
import grayCloseIconHover from '@assets/icons/icon-close-gray-hover.svg'
export interface NormalInputProps extends InputProps {
  rootClassName?: string
  showDeleteIcon: boolean
  status?: InputStatus
  titleNode?: ReactNode
  prefixNode?: ReactNode
  onDelete?: (event: any) => void
}
const NormalInput = forwardRef<InputRef, NormalInputProps>((props, ref) => {
  const {
    rootClassName,
    status,
    titleNode,
    prefixNode,
    showDeleteIcon,
    onDelete,
    ...leftProps
  } = props

  // const handleWheel = (e: any) => {
  //   if (e.target.type === 'number') {
  //     e.target.blur()
  //   }
  // }
  return (
    <div
      className={classNames(
        styled.normalInputContainer,
        rootClassName,
        `${showDeleteIcon && styled.normalInputContainerDel}`
      )}
    >
      {titleNode ? (
        <div className={styled.normalInputTitle}> {titleNode} </div>
      ) : null}
      {prefixNode ? <div className={styled.normalInputPrefix}>{prefixNode}</div> : null}
      <Input
        status={props.status}
        {...leftProps}
        ref={ref}
        className={classNames(styled.normalInput, props.className)}
      />
      {showDeleteIcon ? (
        <HoverImage
          normalImage={grayCloseIcon}
          hoverImage={grayCloseIconHover}
          onClick={onDelete}
        />
      ) : null}
    </div>
  )
})

export default NormalInput
