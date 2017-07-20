'use strict'
const dummy = require('./middlewares/dummy')

const beforeRoutes = (app) => {
  app.use(dummy)
}

const afterRoutes = (app) => {
  app.use(dummy)
}

module.exports = {
  beforeRoutes: beforeRoutes,
  afterRoutes: afterRoutes
}
