'use strict'

const dummy = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log('dummy middleware')
  next()
}

module.exports = dummy
