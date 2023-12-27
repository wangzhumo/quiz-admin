import { Middleware } from 'redux'
import { IAppState } from '@/store/store'

const customMiddleware: Middleware<{}, IAppState> = store => next => action => {
    return next(action)
}

export { customMiddleware }
