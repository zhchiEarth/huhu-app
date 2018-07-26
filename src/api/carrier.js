import request from './request'

export function cateList(query) {
    return request({
        url:'/carrier/getCateList',
        method: 'post',
        data: query
    });
}

export function confirmPay(data) {
    return request({
        url:'/carrier/confirmPay',
        method: 'post',
        data: data
    });
}

export function signValid(data) {
    return request({
        url:'/carrier/signValid',
        method: 'post',
        data: data
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
        method: 'post',
        data: data
        // params: data
    });
}

export function storyList(data) {
    return request({
        url:'/carrier/storyList',
        method: 'post',
        data: data
        // params: data
    });
}