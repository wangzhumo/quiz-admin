import storage from 'redux-persist/lib/storage'
import { PersistKeys } from './keys'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import accountSlice from './slices/accountSlice'

const persistRootWhite: string[] = []
const persistRoot = {
    key: PersistKeys.ROOT,
    storage,
    whitelist: persistRootWhite
}

const persistAccountWhite = ['accountInfo']
const persistAccount = {
    // storage key
    key: PersistKeys.ACCOUNT,
    storage,
    whitelist: persistAccountWhite
}

const combineReducer = combineReducers({
    accountReducer: persistReducer(persistAccount, accountSlice)
})

export { persistRoot, persistAccount }

const rootReducers = persistReducer(persistRoot, combineReducer)

export type ReducerType = ReturnType<typeof rootReducers>
export default rootReducers
