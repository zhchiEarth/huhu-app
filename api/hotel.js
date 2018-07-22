import fetch from 'utils/fetch';

export function hotelList(query) {
    return fetch({
        url: 'admin/hotel',
        method: 'get',
        params: query
    });
}

export function getHotel(id) {
    return fetch({
        url: 'admin/hotel/' + id +'/edit',
        method: 'get',
    });
}

export function addHotel(data) {
    return fetch({
        url: 'admin/hotel',
        method: 'post',
        data: data
    });
}

export function updateHotel(id, data) {
    return fetch({
        url: 'admin/hotel/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyHotel(id) {
    return fetch({
        url: 'admin/hotel/' + id,
        method: 'DELETE'
    });
}