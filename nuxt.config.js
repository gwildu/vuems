const dotenv = require('dotenv')
dotenv.config('.env.vuems.default')

module.exports = {
  env: {
    VUEMS_API_URL_PAGES: process.env.VUEMS_API_BASE + process.env.VUEMS_API_PATH_PAGES || 'http://localhost:8888/api/pages',
    VUEMS_API_URL_PAGE: process.env.VUEMS_API_BASE + process.env.VUEMS_API_PATH_PAGE || 'http://localhost:8888/api/page',
    VUEMS_API_URL_TEMPLATES: process.env.VUEMS_API_BASE + process.env.VUEMS_API_PATH_TEMPLATES || 'http://localhost:8888/api/templates'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
