import React, { ReactNode } from 'react'
import styles from './rainbowToggle.module.css'
import classnames from 'classnames'

export interface RainbowUnderlineToggleProps {
  onToggle?: (e: any) => void
  isSelected?: boolean
  text?: string | ReactNode
  tab?: ReactNode
  redPoint?: boolean
  classNames?: string
}

export const RainbowUnderlineToggle: React.FC<
  RainbowUnderlineToggleProps
> = props => {
  return (
    <div
      className={classnames(styles.rainbowUnderlineText, props.classNames)}
      onClick={props.onToggle}
    >
      <div className={styles.rainbowUnderlineTextText}>
        <div className={styles.rainbowUnderlineTextTextLabel}>
          {props.text}
          {props.redPoint && <div className={styles.rainbowUnderlinePoint} />}
        </div>
        {props.tab}
      </div>
      <div
        className={classnames(
          styles.rainbowUnderlineTextLine,
          props.isSelected ? styles.rainbowUnderlineTextLineSelected : ''
        )}
      />
    </div>
  )
}
