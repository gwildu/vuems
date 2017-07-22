'use strict'
const fs = require('fs')
const path = require('path')

const TEMPLATES_PATH = '../../templates'

module.exports = function () {
  console.log('getTemplates')
  return fs.readdirSync(path.join(__dirname, TEMPLATES_PATH))
    .filter((item) => { return item.indexOf('.vue') })
    .map((item) => { return item.replace(/\.vue/, '') })
}
