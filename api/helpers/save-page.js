'use strict'
const fs = require('fs')
const path = require('path')

const PAGES_PATH = '../../pages/'

module.exports = function (page) {
  const pageDir = page.name.split('_').join('/') + '.json'
  fs.writeFileSync(path.join(__dirname, PAGES_PATH, pageDir), JSON.stringify(page), 'utf8')
}
