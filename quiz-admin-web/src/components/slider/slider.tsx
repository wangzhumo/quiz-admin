import { Menu } from 'antd'
import type { GetProp, MenuProps } from 'antd'
import { AiFillDashboard } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineQuiz } from 'react-icons/md'
import { GrResources } from 'react-icons/gr'

type MenuItem = GetProp<MenuProps, 'items'>[number]

const items: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <AiFillDashboard />,
    label: 'Dashboard'
  },
  {
    key: 'user',
    icon: <FaUsers />,
    label: 'Account Manage',
    children: [{ key: 'u-1', label: 'Manager' }]
  },
  {
    key: 'quizzes',
    label: 'Quizzes Manage',
    icon: <MdOutlineQuiz />,
    children: [
      { key: 'quiz-n', label: 'Create' },
      { key: 'quiz-m', label: 'Manage' }
    ]
  },
  {
    key: 'static',
    label: 'Static Resource',
    icon: <GrResources />,
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' }
    ]
  }
]

function SliderComponent() {
  return (
    <div className='overflow-auto'>
      <Menu
        items={items}
        mode={'inline'}
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['dashboard', 'user', 'quizzes', 'static']}
        inlineCollapsed={false}
      />
    </div>
  )
}

export default SliderComponent
