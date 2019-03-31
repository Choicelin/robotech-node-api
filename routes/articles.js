/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-23
 * Time: 18:43
 */

const express = require('express');
const router = express.Router();
// const articlesManager = require('../manager/articlesManager')
const articlesRequest = require('../requestService/articlesRequest')

/* GET home page. */
router.get('/list', async (req, res, next) => {
  const { page, pageSize } = req.query
  const data = await articlesRequest.getList(page, pageSize)
  res.json(data)
});

router.get('/getArticleById', async (req, res, next) => {
  const {id} = req.query
  const data = await articlesRequest.getArticleById(id)
  res.json(data)
})

// router.post('/postArticle', async (req, res, next) => {
//   const data = await articlesManager.postArticle
// })

module.exports = router;

