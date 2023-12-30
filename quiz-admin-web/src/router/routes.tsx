import { RouteObject } from 'react-router-dom'
import MainLayout from '../pages/main/main'
import NotFoundPage from '../pages/notFound/notFound'
import { GuardMeta } from './guard/guard'
import RouteGuard from './guard/routeGuard'

declare module 'react-router-dom' {
  interface IndexRouteObject {
    meta?: GuardMeta
  }

  interface NonIndexRouteObject {
    meta?: GuardMeta
  }
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export default routes
