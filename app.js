const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const jwt = require('express-jwt')
const config = require('./config/config.environment')
let env = config.env === 'dev' ? './config/config.dev' : './config/config.prod'

const { secret } = require(env)

const usersRouter = require('./routes/users')
const articlesRouter = require('./routes/articles')
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/robot', express.static(path.join(__dirname, 'public')))
const whiteList = {path: ['/api/users/register', '/api/users/login', '/api/articles/list', '/api/articles/getArticleById']}
app.use(jwt({
  secret,
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
}).unless(whiteList))

app.use('/api/users', usersRouter)
app.use('/api/articles', articlesRouter)

app.use(function (req, res, next) {
  res.status(404).send('404 Not Found')
})

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...')
  }
})

module.exports = app
