import { AccountInfo } from '@/model/account'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { updateAccount } from '@/store/slices/accountSlice'
import { removeAccountInfo } from '@/store/store'
import CheckUtils from '@/utils/checkutils'
import { getLocalStore, remLocalStore, setLocalStore } from '@/utils/localStore'
const userStoreKey = 'QUIZ-USER-STORE'
export const defaultAccountStore = {
  avatar: '',
  uid: '',
  token: '',
  nick: '',
  status: 0,
  lastAt: 0,
  createAt: 0,
  identityType: 0,
  identity: ''
}

export const useAccount = () => {
  const dispatch = useAppDispatch()
  const accountInfo = useAppSelector(state => state.accountReducer.accountInfo)

  const getAccountInfo = () => {
    return Object.keys(accountInfo ?? {}).length
      ? accountInfo
      : defaultAccountStore
  }
  const hasPrivilege = (role: number) => {
    return true
  }

  const hasLogin = () => {
    const accountInfo = getAccountInfo()
    const localAccount = getLocalAccount()
    const checkNotEmpty = (u: AccountInfo) =>
      CheckUtils.isNotEmpty(u.token) && CheckUtils.isNotEmpty(u.uid)
    return checkNotEmpty(accountInfo) && checkNotEmpty(localAccount)
  }

  const setAccountInfo = (accountInfo: AccountInfo | undefined) => {
    const newAccountInfo = {
      ...(accountInfo ?? {}),
      uid: String(accountInfo?.uid ?? '')
    }
    setLocalStore(userStoreKey, newAccountInfo)
    dispatch(updateAccount(newAccountInfo ?? {}))
  }
  const rmAccountInfo = (): void => {
    remLocalStore(userStoreKey)
    removeAccountInfo()
    // clear all cache data.
  }
  return {
    accountInfo: getAccountInfo(),
    hasLogin,
    setAccountInfo,
    rmAccountInfo,
    hasPrivilege
  }
}

export const getLocalAccount = () => {
  return (
    (getLocalStore(userStoreKey) as AccountInfo | undefined) ??
    defaultAccountStore
  )
}
