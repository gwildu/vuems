'use strict'

const initPage = (pageData) => {
  const getComponents = () => {
    let result = {}
    pageData.allowedWidgets.forEach((name) => {
      result[name + '-widget'] = require('../widgets/' + name + '.vue')
    })
    result[pageData.template + '-template'] = require('../templates/' + pageData.template + '.vue')
    return result
  }

  return {
    getComponents
  }
}

export default {
  initPage
}
