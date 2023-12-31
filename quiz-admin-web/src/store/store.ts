import { configureStore } from '@reduxjs/toolkit'
import rootReducers, { persistAccount } from './reducers'
import format from 'string-format'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, purgeStoredState } from 'redux-persist'
import { PersistKeys } from './keys'
import { customMiddleware } from './middleware'

const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(customMiddleware)
    }
})

// define
type IAppState = ReturnType<typeof rootReducers>
type IAppDispatch = typeof store.dispatch

// persist
export const persistor = persistStore(store)

export const removeAccountInfo = () => {
    purgeStoredState(persistAccount)
    store.dispatch({
        type: format('{}/{}', PersistKeys.ACCOUNT, 'CLEAR')
    })
}

export type { IAppDispatch, IAppState }
export default store
