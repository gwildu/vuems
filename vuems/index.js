'use strict'

const initPage = (pageData) => {
  const meta = pageData.meta

  const getWidgetComponents = () => {
    console.log('meta: ', meta)
    let result = {}
    meta.allowedWidgets.forEach((name) => {
      console.log('name: ', name)
      result[name + '-widget'] = require('../widgets/' + name + '.vue')
    })
    return result
  }

  return {
    getWidgetComponents
  }
}

export default {
  initPage
}
