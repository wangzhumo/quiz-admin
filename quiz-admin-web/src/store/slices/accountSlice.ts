import { AccountInfo } from '@/model/account'
import { createSlice } from '@reduxjs/toolkit'
import { PersistKeys } from 'src/store/keys'

export interface AccountStateType {
    accountInfo: AccountInfo | any
}
const initialState = {
    accountInfo: {}
}

const accountReducer = createSlice({
    name: PersistKeys.ACCOUNT,
    initialState: initialState,
    reducers: {
        CLEAR: (state: AccountStateType, action) => {
            state.accountInfo = {}
        },
        updateAccount: (state: AccountStateType, action) => {
            state.accountInfo = action.payload
        }
    }
})

export const { CLEAR, updateAccount } = accountReducer.actions
export default accountReducer.reducer
