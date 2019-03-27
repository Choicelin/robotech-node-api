/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-24
 * Time: 10:11
 */
const sequelize = require('../model/Connector')
const Model = require('../model/Articles')

module.exports = {
  async getTotalCount () {
    return await Model.count()
  },
  async getList (page, pageSize) {
    const offset = (page - 1) * pageSize
    const limit = Number(pageSize)
    const queryObj = await Model.findAndCountAll({
      offset,
      limit,
      raw: true,
      order: [['id', 'DESC']]
    })
    const totalCount = queryObj.count
    const totalPage = Math.ceil(totalCount/ pageSize)
    const rows = queryObj.rows
    return {
      data: rows,
      page: page - 0,
      pageSize: pageSize - 0,
      totalPage,
      totalCount
    }
  },
  async getArticleById (id) {
    const obj = await Model.findOne({where: {id}})
    obj.pv = Number(obj.pv) + 1
    await obj.save()
    return {
      data: obj.get({plain: true}),
      message: '文章查询成功'
    }
  }
}
