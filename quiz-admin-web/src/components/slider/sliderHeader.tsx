import logo from '@/assets/images/app_logo.png'
import styles from './sliderHeader.module.css'

export interface SliderHeaderProps {
  onClick: () => void
}

const SliderHeaderComponent = (props: SliderHeaderProps) => {
  return (
    <div className='flex flex-col h-20 justify-center'>
      <div className='flex justify-center content-center items-center space-x-2'>
        <img src={logo} className='w-11 h-11' />
        <span className='text-3xl inline-block'>Quizzes</span>
      </div>
      <div className={styles.iconButton} onClick={() => props.onClick()}></div>
    </div>
  )
}

export default SliderHeaderComponent
