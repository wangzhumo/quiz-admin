import { createSlice } from '@reduxjs/toolkit'
import { AccountInfo } from 'model/account'
import { PersistKeys } from '../keys'

export interface AccountStateType {
  accountInfo: AccountInfo | any
}
const initialState = {
  accountInfo: {} as AccountInfo
}

/* eslint-disable */
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
/* eslint-disable */

export const { CLEAR, updateAccount } = accountReducer.actions
export default accountReducer.reducer
