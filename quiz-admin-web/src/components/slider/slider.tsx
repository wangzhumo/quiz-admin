import { ConfigProvider, Menu } from "antd";
import type { GetProp, MenuProps } from 'antd'
import { AiFillDashboard } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineQuiz } from 'react-icons/md'
import { GrResources } from 'react-icons/gr'
import { useNavigate } from "react-router-dom";
import colors from "tailwindcss/colors";

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
    children: [{ key: '/account', label: 'Manager' }]
  },
  {
    key: 'quizzes',
    label: 'Quizzes Manage',
    icon: <MdOutlineQuiz />,
    children: [
      { key: '/quizzes/create', label: 'Create' },
      { key: '/quizzes/manager', label: 'Manage' }
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
  const nav = useNavigate()
  function handleMenuClick(info: any){
    nav(info.key)
  }
  return (
    <div className='overflow-auto mt-8 w-52'>
      <ConfigProvider theme={{components: {
            Menu: {
              colorSplit: colors.transparent,
              colorFillAlter: colors.transparent,
              colorBgContainer: '#1A1B1C'
            }
        }}}>
        <Menu
          items={items}
          mode={'inline'}
          onSelect={handleMenuClick}
          defaultSelectedKeys={['dashboard']}
          defaultOpenKeys={['dashboard', 'user', 'quizzes', 'static']}
          inlineCollapsed={false}
        />
      </ConfigProvider>
    </div>
  )
}

export default SliderComponent
