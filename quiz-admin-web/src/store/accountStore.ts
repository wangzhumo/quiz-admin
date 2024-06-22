import type { AccountInfo } from '@/model/account'
import { getLocalStore, remLocalStore, setLocalStore } from '@/utils/localStore'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
const userStoreKey = 'QUIZ-USER-STORE'
const defaultAccount = {
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
interface Actions {
  updateAccount: (user: AccountInfo | undefined) => void
  hasLogin: () => boolean
  rmAccountInfo: () => void
}
interface State {
  user: AccountInfo
}
const getLocalAccount = () => {
  return getLocalStore(userStoreKey) as AccountInfo | undefined
}
const initialState = {
  user: getLocalAccount() ?? defaultAccount
}

export const useAccountStore = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        updateAccount: user => {
          if (user === undefined) {
            setLocalStore(userStoreKey, '')
            set({ user: defaultAccount })
          } else {
            setLocalStore(userStoreKey, user)
            set({ user: user })
          }
        },
        hasLogin: () => {
          return get().user.token !== undefined
        },
        rmAccountInfo: () => {
          remLocalStore(userStoreKey)
          set({ user: defaultAccount })
        }
      }),
      {
        name: 'accountStore'
      }
    )
  )
)
