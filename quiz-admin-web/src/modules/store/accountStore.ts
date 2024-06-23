import type { AccountInfo } from '@/model/account'
import { getLocalStore, remLocalStore, setLocalStore } from '@/utils/localStore'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import CheckUtils from '@/utils/checkutils'
import { signIn } from '@/modules/requests/ucenter'
const userStoreKey = 'QUIZ-USER-STORE'
const defaultAccount = {
  avatar: '',
  uid: '',
  token: '',
  nick: '',
  status: 0,
  region: 'Global',
  createAt: 0,
  identityType: 0,
  identity: ''
}
interface Actions {
  updateAccount: (user: AccountInfo | undefined) => void
  hasLogin: () => boolean
  rmAccountInfo: () => void
  signIn: (email: string, password: string) => any
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
          return CheckUtils.isNotEmpty(get().user.token)
        },
        rmAccountInfo: () => {
          remLocalStore(userStoreKey)
          set({ user: defaultAccount })
        },
        signIn: async (email, password) => {
          // @ts-ignore
          const ret = await signIn(email, password)
            .then((res: any) => {
              if (res != null) {
                const user = {
                  uid: String(res.uid),
                  token: res.token,
                  nick: res.username,
                  createAt: res.createAt,
                  region: res.region,
                  avatar: res.avatarUrl,
                  status: res.status,
                  identity: '',
                  identityType: 1
                }
                set({ user: user })
                return user
              }
            })
            .catch((err: any) => {
              console.log(err)
              return null
            })
          return ret ?? get().user
        }
      }),
      {
        name: 'accountStore'
      }
    )
  )
)
