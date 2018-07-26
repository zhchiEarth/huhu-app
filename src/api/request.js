import axios from 'axios'
import { Toast } from 'antd-mobile';
import Cookies from 'js-cookie'

const defaultAxiosConf = {
  // baseURL: 'http://h5dev.test/huhuapi',
  baseURL: 'https://h5devel.huhustory.com/huhuapi',
  timeout: 5000,
  headers: {
    Accept: 'application/json'
  }
}

const _request = (params = {}, fn = () => {}) => {
  if (params.method === 'get') {
    let sign = (params.params && params.params.sign) ? params.params.sign : false
    params.params = {
      ...params.params,
      os: 'h5',
      sign: sign || Cookies.get('sign') || ''
    }
  } else {
    let sign = (params.data && params.data.sign) ? params.data.sign : false
    params.data = {
      ...params.data,
      os: 'h5',
      sign: sign || Cookies.get('sign') || ''
    }
  }


  return axios({ ...defaultAxiosConf, ...params })
    .then(res => {
      const { status, msg } = res.data
      if (status) {
        fn(false)
        return msg
      } else {
        throw String(msg || '网络错误')
      }
    })
    .catch(err => {
      fn(false)
      Toast.offline(String(err || '网络错误'))
      console.error(err)
      throw err
    })
}

export default (param) => {
  const typeRes = typeof param
  if (typeRes === 'function') {
    param(true)
    return (obj) => _request(obj, param)
  }
  if (typeRes === 'object' && typeRes !== null) return _request(param)
}
