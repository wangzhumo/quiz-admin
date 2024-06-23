import { UCenterNet } from '@/modules/requests/index'

export function signIn(email: String, password: String) {
  return UCenterNet.simplePost('/signin', {
    identityType: 1,
    identity: email,
    credential: password,
    appSource: 1
  })
}
