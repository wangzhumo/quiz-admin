import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Outlet } from 'react-router-dom'
import QuizAppBar from '@/components/appbar/quizAppbar'
import SliderComponent from '@/components/slider/slider'
import { App, ConfigProvider } from 'antd'
import colors from 'tailwindcss/colors'
import { StyleProvider } from '@ant-design/cssinjs'

const MainLayout = () => {
  const handleDrawerOpen = () => {}
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          colorBgBase: '#1A1B1C',
          colorTextBase: colors.white,
          colorBgContainer: '#1A1B1C',
          colorPrimaryHover: '#555555',
          colorPrimary: '#1A1B1C',
          colorBorder: '#333333',
          controlHeight: 48
        },
        components: {
          Input: {
            controlHeight: 48,
          },
          Menu: {
            itemSelectedBg: "#333333",
            itemSelectedColor: "#FFFFFF"
          },
          DatePicker: {
            colorBgContainer: '#333333',
          }
        }
      }}
    >
      <StyleProvider layer>
        <App className='flex flex-col text-white w-full h-full bg-black-main'>
          <QuizAppBar onClick={handleDrawerOpen} />
          <div className='flex flex-1 mt-20'>
            <aside className='w-80 border-r-1 border-line flex justify-center pr-5'>
              <SliderComponent />
            </aside>
            <Outlet />
          </div>
        </App>
      </StyleProvider>
    </ConfigProvider>
  )
}

export default MainLayout
