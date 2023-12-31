import { Middleware } from 'redux'
import { IAppState } from '@/store/store'

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export const customMiddleware: Middleware<{}, IAppState> =
  store => next => action => {
    return next(action)
  }
