export interface AuthInfo {
    identityType: number
    identity: string
    username?: string
    payload?: string
    avatarUrl?: string
}

export interface AccountInfo {
    uid: string
    token: string
    nick: string
    avatar: string
    status: number
    region: string
    createAt: number
    authInfo?: AuthInfo
    identityType: number
    identity: string
}
