import axios from 'axios'
const API_URL_PAGE = process.env.VUEMS_API_URL_PAGE
const debug = require('debug')('vuems_vuex')

const savePage = (page) => {
  return axios.put(API_URL_PAGE, page)
    .catch((error) => {
      debug('Error when trying to save page data to api: ', error)
    })
}

export default savePage
