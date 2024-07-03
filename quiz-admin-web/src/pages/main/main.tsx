import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import QuizAppBar from '@/components/appbar/quizAppbar'
import SliderComponent from '@/components/slider/slider'
import { ComponentPreviews, useInitial } from '@/dev'
import { StyleProvider } from '@ant-design/cssinjs'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { App, ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom'
import colors from 'tailwindcss/colors'
const antdThemes = {
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
      controlHeightLG: 48
    },
    InputNumber: {
      controlHeight: 50,
      controlHeightLG: 50
    },
    Menu: {
      itemSelectedBg: '#333333',
      itemSelectedColor: '#FFFFFF'
    },
    DatePicker: {
      colorBgContainer: '#333333'
    },
    Popover: {
      borderRadiusLG: 18,
      borderRadiusXS: 18
    }
  }
}
const MainLayout = () => {
  const handleDrawerOpen = () => {}
  return (
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <ConfigProvider theme={antdThemes}>
        <StyleProvider layer>
          <App className='flex flex-col text-white w-full h-full bg-black-main'>
            <QuizAppBar onClick={handleDrawerOpen} />
            <div className='flex flex-1 mt-20 bg-black-main'>
              <aside className='w-80 border-r-1 border-line flex justify-center pr-5'>
                <SliderComponent />
              </aside>
              <Outlet />
            </div>
          </App>
        </StyleProvider>
      </ConfigProvider>
    </DevSupport>
  )
}

export default MainLayout
