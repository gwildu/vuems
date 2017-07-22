import axios from 'axios'
const API_URL_PAGES = process.env.VUEMS_API_URL_PAGES
const debug = require('debug')('vuems_vuex')

const savePage = (name, page) => {
  return axios.put(API_URL_PAGES + '/' + name, page)
    .catch((error) => {
      debug('Error when trying to save page data to api: ', error)
    })
}

export default savePage
