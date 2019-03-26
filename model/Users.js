/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-24
 * Time: 11:34
 */

const Sequelize = require('sequelize')
const sequelize = require('./Connector')

class Users extends Sequelize.Model {}

Users.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  accountName: Sequelize.STRING(30),
  nickname: Sequelize.STRING(50),
  age: Sequelize.INTEGER,
  sex: Sequelize.INTEGER,
  email: Sequelize.STRING(100),
  wechat: Sequelize.STRING(100),
  qq: Sequelize.STRING(24),
  password: Sequelize.STRING(128),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {
  sequelize,
  timestamps: true,
  underscored: true
})

module.exports = Users
