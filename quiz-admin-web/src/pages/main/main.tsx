import SliderComponent from '@/components/slider/slider'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box } from "@mui/material";

const { Sider, Content } = Layout

const MainLayout = () => {
  return (
    <Box>
      <Sider
        className={'app-sidebar'}
        collapsible={true}
        defaultCollapsed={false}
        reverseArrow={true}
      >
        <SliderComponent />
      </Sider>
      <Box className='app-main'>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
