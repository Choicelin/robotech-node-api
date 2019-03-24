/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-23
 * Time: 18:43
 */

const express = require('express');
const router = express.Router();
const articlesManager = require('../manager/articlesManager')

/* GET home page. */
router.get('/list', async (req, res, next) => {
  const { page, pageSize } = req.query
  const data = await articlesManager.getList(page, pageSize)
  res.json(data)
});

module.exports = router;

