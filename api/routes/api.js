'use strict'
const express = require('express')
const getPage = require('../helpers/get-page')
const router = express.Router()

router.get('/pages/:name', function (req, res, next) {
  res.status(200).send(getPage(req.params.name))
})

module.exports = router
