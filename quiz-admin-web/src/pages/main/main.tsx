import { Box, Main, Sidebar } from 'grommet'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <Box direction='row' height={{ min: '100%' }}>
      <Sidebar className={'app-sidebar'}>
        <div>Sidebar</div>
      </Sidebar>
      <Main className='app-main'>
        <Outlet />
      </Main>
    </Box>
  )
}

export default MainLayout
