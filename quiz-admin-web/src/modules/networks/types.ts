import { AxiosResponse } from 'axios'

export type RequestData<D> =
    | D[]
    | string
    | number
    | {
          key: string | number
          value: never
      }
    | any
export type Response<D> = RequestData<D>

export interface ResponsePromiseData {
    responsePromise: Promise<AxiosResponse>
    abortController: AbortController
}

export interface ResponseData {
    response: Promise<Response<any>>
    abortController: AbortController
    onCancel: (abortController: AbortController) => any
}

// token expire event key
export const BUS_TOKEN_EXPIRE_KEY = 'HANDLE_TOKEN_EXPIRE'
// invalid token event key
export const BUS_TOKEN_INVALID_KEY = 'HANDLE_TOKEN_INVALID'
