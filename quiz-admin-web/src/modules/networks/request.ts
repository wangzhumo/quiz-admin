import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults
} from 'axios'
import BN from 'bn.js'
import { getLocalAccount } from '@/hooks/useAccount'
import CheckUtils from '@/utils/checkutils'
import eventBus from '@/utils/eventbus'
import { defaultHeader, formDataHeader } from './header'
import { onResponse } from './response'
import {
  BUS_TOKEN_EXPIRE_KEY,
  BUS_TOKEN_INVALID_KEY,
  RequestData,
  ResponsePromiseData
} from './types'

const TIME_OUT = 15000

const TOKEN_CHECK_WHITE_LIST = ['auth']

class BaseRequest {
  readonly instanceRequest: AxiosInstance
  protected readonly baseUrl: string

  protected constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.instanceRequest = this.create()
    this.instanceRequest.interceptors.request.use(
      config => {
        const accountInfo = getLocalAccount()
        const headers: any = {
          ...config.headers,
          authorization: (accountInfo as any).token ?? ''
        }
        return { ...config, headers }
      },
      err => Promise.reject(err)
    )
    this.instanceRequest.interceptors.response.use(
      res => res,
      err => {
        if (err?.response?.status === 401) {
          eventBus.emit(BUS_TOKEN_INVALID_KEY, {})
        }
        return Promise.reject(err)
      }
    )
  }

  protected config(): CreateAxiosDefaults {
    const configParams = {
      baseUrl: this.baseUrl,
      timeout: TIME_OUT,
      header: defaultHeader
    } as CreateAxiosDefaults
    if (CheckUtils.isNotEmpty(this.baseUrl)) {
      configParams.baseURL = this.baseUrl
    }
    return configParams
  }

  protected readonly create = () => {
    return Axios.create(this.config())
  }

  protected readonly requestBefore = (url: string) => {
    // It should not be written here please move out after breaking the encapsulation
    const filterUrl =
      TOKEN_CHECK_WHITE_LIST.filter(value => value.includes(url)) ?? []
    if (filterUrl.length) return true

    const userInfo = getLocalAccount()
    // check expiration time
    const expireTime = new BN((userInfo as any)?.tokenExpireTs ?? 0)
      .mul(new BN(1000))
      .sub(new BN(new Date().getTime()))
      .toNumber()
    if (expireTime <= 10 * 3600 * 1000) {
      // restart get token emit
      eventBus.emit(BUS_TOKEN_EXPIRE_KEY, userInfo)
    }
    // if expired cancel request
    return expireTime > 0
  }

  protected readonly baseGet = (
    url: string,
    config: AxiosRequestConfig = {}
  ) => {
    return this.baseRequest({
      ...config,
      method: 'GET',
      url
    })
  }

  protected readonly basePost = <D>(
    url: string,
    data: RequestData<D>,
    config: AxiosRequestConfig
  ) => {
    return this.baseRequest({
      ...config,
      data,
      method: 'POST',
      url
    })
  }

  protected readonly baseUpload = <D>(
    url: string,
    data: RequestData<D>,
    config: AxiosRequestConfig
  ) => {
    return this.baseRequest({
      ...config,
      data,
      method: 'POST',
      url,
      headers: formDataHeader
    })
  }

  baseRequest = (config: AxiosRequestConfig) => {
    this.requestBefore(config.url ?? '')
    const abortController = new AbortController()
    return {
      responsePromise: this.instanceRequest.request({
        ...config,
        signal: abortController.signal
      }),
      abortController
    }
  }

  protected readonly baseDelete = <D>(
    url: string,
    data: RequestData<D>,
    config: AxiosRequestConfig
  ) => {
    return this.baseRequest({
      ...config,
      data,
      method: 'DELETE',
      url
    })
  }
}

export default class Request extends BaseRequest {
  private readonly showError: boolean

  constructor(baseUrl?: string) {
    super(baseUrl ?? '')
    this.showError = false
  }

  readonly simpleGet = (
    url: string,
    params: any,
    config: AxiosRequestConfig = {}
  ) => {
    let host = url
    if (typeof params === 'object') {
      const bodyKeys = Object.keys(params) || []
      bodyKeys.forEach((value, index) => {
        const prefix = index === 0 ? '?' : '&'
        host = `${host + prefix + value}=${params[value]}`
      })
    } else {
      // default body type is string
      host = `${url}/${params}`
    }
    return this.get(host, config)
  }

  readonly get = (url: string, config: AxiosRequestConfig = {}) => {
    const bResponse: ResponsePromiseData = this.baseGet(url, config)
    return onResponse(bResponse, false)
  }

  readonly simplePost = async <T>(url: string, data: RequestData<T>) => {
    return this.post(url, data, {})
  }

  readonly post = async <T>(
    url: string,
    data: RequestData<T>,
    config: AxiosRequestConfig = {}
  ) => {
    const bResponse: ResponsePromiseData = this.basePost(url, data, config)
    return onResponse(bResponse, false)
  }

  readonly simpleUpload = async <T>(url: string, data: RequestData<T>) => {
    return this.upload(url, data, {})
  }

  readonly upload = async <T>(
    url: string,
    data: RequestData<T>,
    config: AxiosRequestConfig = {}
  ) => {
    const bResponse: ResponsePromiseData = this.baseUpload(url, data, config)
    return onResponse(bResponse, false)
  }

  readonly simpleDelete = async <T>(url: string, data: RequestData<T>) => {
    return this.delete(url, data, {})
  }

  readonly delete = async <T>(
    url: string,
    data: RequestData<T>,
    config: AxiosRequestConfig = {}
  ) => {
    const bResponse: ResponsePromiseData = this.baseDelete(url, data, config)
    return onResponse(bResponse, false)
  }
}
