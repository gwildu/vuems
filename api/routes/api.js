'use strict'
const express = require('express')
const getPage = require('../helpers/get-page')
const savePage = require('../helpers/save-page')
const getTemplates = require('../helpers/get-templates')
const router = express.Router()

router.get('/pages/:name', function (req, res, next) {
  switch (req.method) {
    case 'GET':
      res.status(200).send(getPage(req.params.name))
      break
    case 'PUT':
      savePage(req.params.name, req.body)
      res.status(200).send('OK')
      break
  }
})

router.get('/templates', function (req, res, next) {
  res.status(200).send(getTemplates())
})

module.exports = router
