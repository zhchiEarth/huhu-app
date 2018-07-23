import axios from 'axios';

// 创建axios实例
const service = axios.create({
    baseURL: "http://wsub.hsota.com/", // api的base_url
    timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    if (store.getters.token) {
      config.headers['Accept'] = 'application/json';
      config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest'

    return config;
}, error => {
    // Do something with request error
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(function (response) {
// 对响应数据做点什么

    return response;
}, function (err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400: err.message = '请求错误(400)' ; break;
            case 401:
            window.location.href= 'http://58.240.82.126:8300/tbdpdas/login';
            // err.message = '未授权，请重新登录(401)';
            break;
            case 403:
                err.message = '拒绝访问(403)';
                this.$router.push({ path: '/401' })
                break;
            case 404:
                this.$router.push({ path: '/404' })
                break;
            case 408: err.message = '请求超时(408)'; break;
            case 500: err.message = '服务器错误(500)'; break;
            case 501: err.message = '服务未实现(501)'; break;
            case 502: err.message = '网络错误(502)'; break;
            case 503: err.message = '服务不可用(503)'; break;
            case 504: err.message = '网络超时(504)'; break;
            case 505: err.message = 'HTTP版本不受支持(505)'; break;
            default: err.message = `连接出错(${err.response.status})!`;
        }
    } else {
        err.message = '连接服务器失败!'
    }

    // this.message.error(err.message);
    return Promise.reject(err);
});

export default service;