import { Button } from 'antd'
import type { QuestionItem } from '../../types'
import classNames from 'classnames'
import { GrAdd } from 'react-icons/gr'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { ImMoveDown, ImMoveUp } from 'react-icons/im'
import { MdVerticalAlignBottom, MdVerticalAlignTop } from 'react-icons/md'

export interface OperateViewProps {
  question: QuestionItem
  className: string
}

export default function OperateViewComponent(props: OperateViewProps) {
  return (
    <div className={classNames(props.className, 'flex gap-4 h-12 items-center justify-end')}>
      <Button rootClassName='hidden group-hover:block' size={'small'} type={'link'} icon={<GrAdd></GrAdd>}>
        Insert
      </Button>
      <div className='flex-1'></div>
      <Button rootClassName='hidden group-hover:block' size={'small'} type={'text'} icon={<RiDeleteBin3Line></RiDeleteBin3Line>}>
        Remove
      </Button>
      <Button rootClassName='hidden group-hover:block' size={'small'} type={'text'} icon={<ImMoveUp></ImMoveUp>}>
        Up
      </Button>
      <Button rootClassName='hidden group-hover:block' size={'small'} type={'text'} icon={<ImMoveDown></ImMoveDown>}>
        Down
      </Button>
      <Button rootClassName='hidden group-hover:block' size={'small'} type={'text'} icon={<MdVerticalAlignTop></MdVerticalAlignTop>}>
        Top
      </Button>
      <Button
        size={'small'}
        type={'text'}
        rootClassName='hidden group-hover:block'
        icon={<MdVerticalAlignBottom></MdVerticalAlignBottom>}
      >
        Bottom
      </Button>
      <div className='h-[36px] w-full group-hover:hidden'></div>
    </div>
  )
}
