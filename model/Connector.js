/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-23
 * Time: 16:07
 */
const Sequelize = require('sequelize')
const {user, password, database} = require('../config/config.prod')

const sequelize = new Sequelize(database, user, password, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
