import { type ReactNode, useEffect, useState } from "react";
import classnames from "classnames";
import styled from './hover.module.css'

export interface HoverImageProps {
  children?: ReactNode
  className?: string
  normalImage?: string
  hoverImage?: string
  clickImage?: string
  isClick?: boolean
  onClick?: (event: any) => void
  disabled?: boolean
}

export const HoverImage: React.FC<HoverImageProps> = props => {
  const [isClick, setIsClick] = useState(props.clickImage !== undefined ? props.isClick : false)

  const onClick = (event: any) => {
    if (props.clickImage !== undefined) {
      setIsClick(!isClick)
    }
    props.onClick?.(event)
  }

  useEffect(() => {
    if (props.clickImage !== undefined) {
      setIsClick(props.isClick)
    }
  }, [props.isClick])

  return (
    <div className={classnames(styled.hoverImage,isClick ?  styled.click : '', props.disabled ? styled.hoverImageDisabled : '', props.className)} onClick={onClick}>
      <img className={styled.hoverImageNormal} src={props.normalImage}  alt={'normal state'}/>
      <img className={styled.hoverImageHover} src={props.hoverImage}  alt={'hover state'}/>
      {props.clickImage !== undefined ? <img className={styled.hoverImageClick} src={props.clickImage}  alt={"click state"}/> : null}
      {props.children}
    </div>
  )
}