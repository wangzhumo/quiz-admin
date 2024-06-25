import { ReactNode, useEffect, useState } from "react";
import classnames from "classnames";

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
    <div className={classnames(isClick ? 'hover-image click' : 'hover-image', props.disabled ? 'hover-image-disabled' : '', props.className)} onClick={onClick}>
      <img className={'hover-image-normal'} src={props.normalImage}  alt={'normal state'}/>
      <img className={'hover-image-hover'} src={props.hoverImage}  alt={'hover state'}/>
      {props.clickImage !== undefined ? <img className={'hover-image-click'} src={props.clickImage}  alt={"click state"}/> : null}
      {props.children}
    </div>
  )
}