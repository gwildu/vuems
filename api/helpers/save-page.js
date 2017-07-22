'use strict'
const fs = require('fs')
const path = require('path')

const PAGES_PATH = '../../pages/'

module.exports = function (name, page) {
  const pageDir = name.split('_').join('/') + '.json'
  fs.writeFileSync(path.join(__dirname, PAGES_PATH, pageDir), page, 'utf8')
}
