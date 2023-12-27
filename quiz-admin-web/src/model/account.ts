export interface AuthInfo {
    identityType: number
    identity: string
    username?: string
    payload?: string
    avatarUrl?: string
}

export interface AccountInfo {
    avatar: string
    uid: string
    token: string
    nick: string
    status: number
    lastAt: number
    createAt: number
    authInfo?: AuthInfo
    identityType: number
    identity: string
}
