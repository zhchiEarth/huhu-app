import axios from 'axios'
import { Toast } from 'antd-mobile';


const defaultAxiosConf = {
  baseURL: 'http://h5dev.test/huhuapi',
  timeout: 5000
}

const _request = (params = {}, fn = () => {}) => {
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
