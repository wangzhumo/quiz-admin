import Dashboard from '@/pages/dashboard/dashboard'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
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
    element: (
      <RouteGuard>
        <MainLayout />
      </RouteGuard>
    ),
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export const router = createBrowserRouter(routes)

export default routes
