import request from './request'

export function cateList(query) {
    return request({
        url:'/carrier/getCateList',
        method: 'get',
        params: query
    });
}

export function aliPay(query) {
    return request({
        url:'/carrier/aliPay',
        method: 'get',
        params: query
    });
}


export function getOrderList(data) {
    return request({
        url:'/carrier/myOrder',
        method: 'post',
        data: data
    });
}

export function getCate(data) {
    return request({
        url:'/carrier/cateDetail',
        method: 'get',
        params: data
    });
}