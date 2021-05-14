import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

export enum HTTPMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
}

interface AxiosPromiseCancellable extends AxiosPromise {
  cancel: () => void
}

const defaultParams: AxiosRequestConfig = {
  cancelToken: undefined,
  method: HTTPMethod.GET,
}

export default function callApi(url: string, token: string, params: AxiosRequestConfig = defaultParams) {
  const source = axios.CancelToken.source()
  const { headers, ...restParams } = params
  restParams.cancelToken = source.token
  const customHeaders = {
    ...headers,
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const axiosPromise = axios({
    url,
    ...restParams,
    headers: customHeaders,
  })

  return Object.defineProperty(axiosPromise, 'cancel', {
    enumerable: true,
    value: source.cancel,
  }) as AxiosPromiseCancellable
}
