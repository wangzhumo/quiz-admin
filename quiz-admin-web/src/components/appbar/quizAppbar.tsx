import styles from './quizAppbar.module.scss'
import React from 'react'
import { Avatar, Badge, IconButton } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import classnames from "classnames";
export interface QuizAppBarProps {
  onClick: () => void
  open?: boolean
}

function QuizAppBar(props: QuizAppBarProps) {
  return (
    <div className={styles.appbarContainer}>
      <IconButton
        className={ classnames(props.open ? styles.hide : '') }
        onClick={props.onClick}
      >
        <TuneIcon className={styles.openIcon} />
      </IconButton>
      <div className={styles.spacing} />
      <Badge
        className={styles.notificationsBadge}
        badgeContent={4}
        color='primary'
      >
        <NotificationsNoneIcon color='action' />
      </Badge>
      <Badge
        className={styles.avatarBadge}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar className={styles.avatar} />
      </Badge>
    </div>
  )
}

export default QuizAppBar
