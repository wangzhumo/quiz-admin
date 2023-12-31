import React from 'react'
import { Image } from 'antd'
import logo from '@/assets/images/app_logo.png'
import styles from './sliderHeader.module.scss'
const SliderHeaderComponent = () => {
  return (
    <div className={styles.headerContainer}>
      <Image src={logo} height={'40px'} />
      <span className={styles.text}>Quizzes Admin</span>
    </div>
  )
}

export default SliderHeaderComponent
