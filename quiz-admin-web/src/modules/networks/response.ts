import { AxiosResponse } from 'axios'
import { ResponsePromiseData } from './types'

export const onResponse = (responseData: ResponsePromiseData, showError: boolean) => {
    return responseData.responsePromise
        .then(response => {
            const res = handleResponse(response)
            if (res.code === 0) {
                return res.data ?? res
            } else {
                return Promise.reject(res)
            }
        })
        .catch(err => {
            if (showError) {
                console.error(err)
            }
            console.error('[ERROR NETWORK]!! err:', err?.message ?? err)
            return Promise.reject(err)
        })
}

const handleResponse = (response: AxiosResponse) => {
    // todo handle response all
    //  for example:
    //  network 200 3xx 5xx etc.
    //  business successful or failure
    return response.data
}
