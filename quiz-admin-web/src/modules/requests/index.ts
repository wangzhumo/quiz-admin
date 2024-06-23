import Request from '@/modules/networks/request'

let UCenterNet: any
if (!UCenterNet) {
  UCenterNet = new Request(import.meta.env.VITE_APP_NETWORK_BASE_URL)
}

export type { RequestData, ResponseData } from '@/modules/networks/types'
export { UCenterNet ,Request }
