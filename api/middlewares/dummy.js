'use strict'

const dummy = (req, res, next) => {
  console.log('dummy middleware')
  next()
}

module.exports = dummy
