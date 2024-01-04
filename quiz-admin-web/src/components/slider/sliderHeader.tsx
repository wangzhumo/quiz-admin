import logo from '@/assets/images/app_logo.png'
import CloseIcon from '@mui/icons-material/ArrowCircleLeft'
import { IconButton } from '@mui/material'
import styles from './sliderHeader.module.scss'
import Image from '@/components/common/image'

export interface SliderHeaderProps {
  onClick: () => void
}

const SliderHeaderComponent = (props: SliderHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <Image src={logo} height={'40px'} />
      <span className={styles.text}>Quizzes Admin</span>
      <IconButton className={styles.iconButton} onClick={props.onClick}>
        <CloseIcon htmlColor='#000000' />
      </IconButton>
    </div>
  )
}

export default SliderHeaderComponent
