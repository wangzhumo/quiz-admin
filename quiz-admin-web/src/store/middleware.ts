import { Middleware } from 'redux'
import { IAppState } from '@/store/store'

// eslint-disable-next-line
export const customMiddleware: Middleware<{}, IAppState> = store => next => action => {
    return next(action)
}
