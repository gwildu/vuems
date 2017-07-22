const axios = require('axios')
const API_URL_TEMPLATES = process.env.VUEMS_API_URL_TEMPLATES
const debug = require('debug')('vuems_vuex')

const getTemplates = () => {
  console.log('getTemplates')
  console.log(API_URL_TEMPLATES)
  return axios.get(API_URL_TEMPLATES)
    .catch((error) => {
      debug('Error when trying to fetch page data from api: ', error)
    })
}

export default getTemplates
