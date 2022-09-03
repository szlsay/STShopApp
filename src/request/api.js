import request from './request'

// 请求首页的数据
export const GetHomeLists = () => request.get('/index/index')
