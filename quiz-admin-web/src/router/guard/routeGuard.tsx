import { useAccount } from '@/hooks/useAccount'
import { Fragment, ReactNode } from 'react'
import { Navigate, matchRoutes, useLocation } from 'react-router-dom'
import routes from '../routes'
import { GuardMeta } from './guard'

interface RouteGuardProps {
  children: ReactNode
}

const RouteGuard: React.FC<RouteGuardProps> = props => {
  const location = useLocation()
  // account info
  const accountInfo = useAccount()

  // get meta
  const matchResult = matchRoutes(routes, location)
  const resultLength = matchResult?.length ?? 0
  if (Array.isArray(matchResult)) {
    const route = matchResult[resultLength - 1].route
    const meta = (route as any).meta as GuardMeta

    // has login
    if (meta?.auth && !accountInfo.hasLogin()) {
      return <Navigate to={'/'} />
    }

    // has role
    if (meta?.role && !accountInfo.hasPrivilege(meta.role)) {
      return <Navigate to={'/'} />
    }
  }
  // biome-ignore lint/complexity/noUselessFragments: <explanation>
  return <Fragment>{props.children}</Fragment>
}

export default RouteGuard
