const axios = require('axios')
const API_URL_PAGES = process.env.VUEMS_API_URL_PAGES
const debug = require('debug')('vuems_vuex')

const getPage = (name) => {
  console.log(API_URL_PAGES + '/' + name)
  return axios.get(API_URL_PAGES + '/' + name)
    .catch((error) => {
      debug('Error when trying to fetch page data from api: ', error)
    })
}

export default getPage
