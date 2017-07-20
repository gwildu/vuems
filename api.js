'use strict'

const http = require('http')
const express = require('express')
const debug = require('debug')('vuems:api')
const dotenv = require('dotenv')
const middlewares = require('./api/middlewares')
const routes = require('./api/routes')

dotenv.config({path: '.env.vuems'})
dotenv.config({path: '.env.vuems.default'})

const app = express()
const port = process.env.VUEMS_API_PORT || 8888

middlewares.beforeRoutes(app)
routes(app)
middlewares.afterRoutes(app)

app.set('port', port)

const api = http.createServer(app)

api.listen(port)
api.on('error', (error) => {
  debug('generic express error handler: ', error)
})
api.on('listening', () => {
  var addr = api.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on: ' + bind)
})
