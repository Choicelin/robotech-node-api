/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-31
 * Time: 18:57
 */

const request = require('request')

module.exports = {
  get: (uri, options) => {
    return new Promise((resolve, reject) => {
      request(uri, {
        gzip: true,
        json: true,
        method: 'GET'
      }, (err, res, body) => {
        if (err) {
          reject(err);
        }
        resolve(body);
      })
    })
  }
}

