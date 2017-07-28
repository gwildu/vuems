'use strict'
const express = require('express')
const getPage = require('../helpers/get-page')
const savePage = require('../helpers/save-page')
const getTemplates = require('../helpers/get-templates')
const router = express.Router()

router.get('/pages/:name', function (req, res, next) {
  res.status(200).send(getPage(req.params.name))
})

router.get('/templates', function (req, res, next) {
  res.status(200).send(getTemplates())
})

router.put('/page', function (req, res, next) {
  savePage(req.body)
  res.status(200).send('OK')
})

module.exports = router
