import Dashboard from '@/pages/dashboard/dashboard'
import { type RouteObject, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../pages/main/main'
import NotFoundPage from '../../pages/notFound/notFound'
import type { GuardMeta } from '@/modules/router/guard/guard'
import RouteGuard from './guard/routeGuard'
import LoginPage from '@/pages/login/login'
import CreateQuizzesPage from "@/pages/quizzes/create/create";

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
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <RouteGuard>
        <MainLayout />
      </RouteGuard>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        meta: {
          auth: true
        }
      },
      {
        path: '/quizzes/create',
        element: <CreateQuizzesPage />,
        meta: {
          auth: true
        }
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
