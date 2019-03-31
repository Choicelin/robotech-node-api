/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-31
 * Time: 18:27
 */
const rp = require('../utils/request')
const { base } = require('../config/requestConfig')

module.exports = {
  async getList (page, pageSize) {
    try {
      const data = await rp.get(`${base}/article/listArticleByType?pageIndex=${page}&pageSize=${pageSize}&typeId=0`)
      if (data.status === 500) {
        return {
          message: data.method || '服务器错误'
        }
      }
      return {
        data: data.data.dataList,
        page: page - 0,
        pageSize: pageSize - 0,
        totalPage: Math.ceil(data.data.totalCount / pageSize),
        totalCount: data.data.totalCount
      }
    } catch (e) {
      return {
        message: e.message || '服务器错误'
      }
    }
  },
  async getArticleById (id) {
    try {
      const data = await rp.get(`${base}/article/getArticleDetailById?id=${id}`)
      if (data.status === 500) {
        return {
          message: data.method || '服务器错误'
        }
      }
      return {
        data: data.data
      }
    } catch (e) {
      return {
        message: e.message || '服务器错误'
      }
    }
  }
}
