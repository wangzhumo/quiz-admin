import { Layout } from 'antd'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const { Header, Content } = Layout

const MainLayout: React.FC = () => {
  return (
    <Fragment>
      <Header className={'app-header'}>
        <div>Header</div>
      </Header>
      <Content className='main-content'>
        <Outlet />
      </Content>
    </Fragment>
  )
}

export default MainLayout
