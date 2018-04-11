import request from '@/utils/request'

export function getStudentData(query) {
  return request({
    url: '/student/list',
    method: 'get',
    params: query
  })
}
export function createStudent(data) {
  return request({
    url: '/student/create',
    method: 'post',
    data
  })
}

export function updateStudent(data) {
  return request({
    url: '/student/update',
    method: 'post',
    data
  })
}

