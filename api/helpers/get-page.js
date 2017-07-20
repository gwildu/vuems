'use strict'
const fs = require('fs')
const path = require('path')

const PAGES_PATH = '../../pages/'

export default function (name) {
  console.log('api: name: ', name)
  const pageDir = name.split('_').join('/') + '.json'
  console.log('path: ', path.join(__dirname, PAGES_PATH, pageDir))
  return fs.readFileSync(path.join(__dirname, PAGES_PATH, pageDir), 'utf8')
}
