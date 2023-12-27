import { AccountInfo } from '@/model/account'
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

export const useAccount = () => {
    return {}
}

export const getLocalUser = () => {
    return (getLocalStore(userStoreKey) as AccountInfo | undefined) ?? defaultAccountStore
}
