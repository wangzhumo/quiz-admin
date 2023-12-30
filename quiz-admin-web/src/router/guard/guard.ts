/**
 * auth - need to log in
 * role - need an identity
 * community - need for community
 */
export interface GuardMeta {
  auth?: boolean
  role?: number
  community?: boolean
}
