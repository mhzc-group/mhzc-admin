import request from '@/utils/request'
//列表
export function listAdmin(query) {
  return request({
    url: '/admin/list',
    method: 'get',
    params: query
  })
}
//新增
export function createAdmin(data) {
  return request({
    url: '/admin/create',
    method: 'post',
    data
  })
}
//详情
export function getOneAdmin(query) {
  return request({
    url: '/admin/read',
    method: 'get',
    params: query
  })
}

export function readminAdmin(data) {
  return request({
    url: '/admin/readmin',
    method: 'get',
    data
  })
}

export function updateAdmin(data) {
  return request({
    url: '/admin/update',
    method: 'post',
    data
  })
}

export function deleteAdmin(data) {
  return request({
    url: '/admin/delete',
    method: 'post',
    data
  })
}
