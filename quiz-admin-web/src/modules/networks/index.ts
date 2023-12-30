import Request from './request'
export type { RequestData, ResponseData } from './types'
const _window = window as any

let network: any
if (!network) {
    network = new Request('')
}

if (!_window.network) {
    _window.network = network ?? new Request('')
}

export { Request, network }
