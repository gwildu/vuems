'use strict'
import getPage from './helpers/get-page'
const debug = require('debug')('vuems:vuex')
const Vue = require('vue')

const emptyPage = {
  name: 'empty page'
}

export default {
  state: {
    // ...getPageNames,
    currentPage: '',
    pages: {}
  },
  getters: {
    vuems_page (state) {
      return state.pages[state.currentPage] || emptyPage
    }
  },
  actions: {
    vuems_fetchPageData ({commit}, name) {
      getPage(name)
        .then((response) => {
          commit('vuems_setPageData', response.data)
        })
        .catch((error) => {
          debug('Error when trying to fetch page data from api: ', error)
        })
    },
    vuems_setCurrentPage ({commit}, name) {
      commit('vuems_setCurrentPage', name)
    }
  },
  mutations: {
    vuems_setPageData (state, page) {
      Vue.set(state.pages, page.name, page)
    },
    vuems_setCurrentPage (state, name) {
      state.currentPage = name
    }
  }
}
