import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const baseURL = '/admin/api'
const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    'x-session-platform-code': 'casino_plat',
    'content-type': 'application/json;charset=UTF-8',
  },
})

instance.interceptors.request.use()

export default instance

/**
 * 通用的列表返回值
 */
interface IResponse<T = any> {
  code: number
  msg: string
  success: boolean
  rows: T
  data: T
  total: number
}
interface IResponseList<T = any> extends Omit<IResponse, 't'> {
  rows: T[]
  total: number
}
/**
 * 通用http请求
 * @param config 
 * @returns 
 */
export function useHttp<T = any, R = undefined>(config: AxiosRequestConfig & { noToast?: boolean }) {
  return instance.request<T, R extends 'list' ? IResponseList<T> : IResponse<T>>(config)
}