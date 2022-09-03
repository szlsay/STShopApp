import request from './request'

// 请求首页的数据
export const GetHomeLists = () => request.get('/index/index')
// 历史记录和热门搜索数据的请求
export const GetPopupData = () => request.get('/search/index')
