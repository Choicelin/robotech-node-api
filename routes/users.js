const express = require('express')
const router = express.Router()
const usersManager = require('../manager/usersManager')

router.post('/login', async (req, res, next) => {
  const obj = await usersManager.login(req.body.accountName, req.body.password)
  res.json(obj)
})

router.post('/register', async (req, res, next) => {
  const user = {
    accountName: req.body.accountName,
    nickname: req.body.nickName,
    password: req.body.password
  }
  if (req.body.qq) user.qq = req.body.qq
  if (req.body.wechat) user.wechat = req.body.wechat
  if (req.body.sex) user.sex = req.body.sex
  if (req.body.age) user.age = req.body.age
  if (req.body.email) user.email = req.body.email
  const obj = await usersManager.register(user, res)
  res.json(obj)
})

module.exports = router
