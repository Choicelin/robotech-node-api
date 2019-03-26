/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-25
 * Time: 15:04
 */

const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const {secret, salt} = require('../config/config.dev')
const Model = require('../model/Users')

function pbkdf2Async (password, salt, iterations, keylen, digest) {
  return new Promise((res, rej) => {
    crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, key) => {
      err ? rej(err) : res(key);
    });
  });
}

module.exports = {
  async login (accountName, password) {
    const user = await Model.findOne({where: {accountName}, raw: true})
    if (!user) {
      return {message: '用户不存在'}
    } else {
      const pwd = await pbkdf2Async(password, salt, 10, 64, 'sha1')
      if (user.password === pwd.toString('hex')) {
        const token = jwt.sign({iss: 'Choicelin'}, secret, {expiresIn: '1h'})
        return {message: '登录成功', token, nickName: user.nickname}
      } else {
        return {message: '密码错误'}
      }
    }
  },
  async register (user) {
    if (user.accountName && user.password && user.nickname) {
      const queryUser = await Model.findOne({where: {accountName: user.accountName}, raw: true})
      if (!queryUser) {
        const pwd = await pbkdf2Async(user.password, salt, 10, 64, 'sha1')
        user.password = pwd.toString('hex')
        const u = await Model.create(user)
        if (u) {
          return {message: '注册成功'}
        } else {
          return {message: '服务器内部错误，请稍后再试'}
        }
      } else {
        return {message: '用户名已存在'}
      }
    } else {
      return {message: '注册信息不全'}
    }
  }
}
