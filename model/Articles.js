/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-23
 * Time: 16:29
 */
const Sequelize = require('sequelize')
const sequelize = require('./Connector')

class Articles extends Sequelize.Model {}

Articles.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: Sequelize.STRING(50),
  context: Sequelize.TEXT('long'),
  summary: Sequelize.STRING(300),
  authorId: Sequelize.INTEGER,
  typeId: Sequelize.INTEGER,
  type: Sequelize.INTEGER,
  original_flag: Sequelize.INTEGER,
  pv: Sequelize.BIGINT,
  likeCount: Sequelize.BIGINT,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {
  sequelize,
  timestamps: true,
  underscored: true
})

module.exports = Articles


