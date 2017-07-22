'use strict'
const fs = require('fs')
const path = require('path')

const PAGES_PATH = '../../pages/'

module.exports = function (name) {
  const pageDir = name.split('_').join('/') + '.json'
  return fs.readFileSync(path.join(__dirname, PAGES_PATH, pageDir), 'utf8')
}
