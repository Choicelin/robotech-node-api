/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-23
 * Time: 16:07
 */
const Sequelize = require('sequelize')
const config = require('../config/config.environment')
let env = config.env === 'dev' ? '../config/config.dev' : '../config/config.prod'

const {user, password, database} = require(env)

const sequelize = new Sequelize(database, user, password, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
