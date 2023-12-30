import { AxiosRequestConfig } from 'axios'
import { RequestData } from '../modules/networks'

declare global {
    interface Window {
        network: Network
        isIOS: () => boolean
        isAndroid: () => boolean
        isPC: () => boolean
    }
}

declare class Network {
    constructor()

    simpleGet(url: string)

    get(url: string, config: AxiosRequestConfig)

    simplePost<T>(url: string, data: RequestData<T>)

    post<T>(url: string, data: RequestData<T>, config: AxiosRequestConfig)

    simpleUpload<T>(url: string, data: RequestData<T>)

    upload<T>(url: string, data: RequestData<T>, config: AxiosRequestConfig)
}
