import type { AccountInfo } from '@/model/account'
import { useAccountStore } from '@/store/accountStore'
import { getLocalStore } from '@/utils/localStore'
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

// Returns the current account info, or the default account store if no user is logged in
export const useAccount = () => {
  const { user, hasLogin, updateAccount, rmAccountInfo } = useAccountStore()

  const getAccountInfo = () => {
    return Object.keys(user ?? {}).length ? user : defaultAccountStore
  }
  const hasPrivilege = (role: number) => {
    return true
  }

  return {
    accountInfo: getAccountInfo(),
    hasLogin,
    updateAccount,
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
