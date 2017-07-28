'use strict'
const cors = require('./middlewares/cors')

const beforeRoutes = (app) => {
  // add here some middlewares that will be executed before the routing
  app.use(cors)
}

const afterRoutes = (app) => {
  // add here some middlewares that will be executed after the routing
}

module.exports = {
  beforeRoutes: beforeRoutes,
  afterRoutes: afterRoutes
}
