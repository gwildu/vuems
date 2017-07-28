'use strict'
import getPage from './helpers/get-page'
import savePage from './helpers/save-page'
import getTemplates from './helpers/get-templates'
const Vue = require('vue')

const emptyPage = {
  name: 'empty page'
}

export default {
  state: {
    // ...getPageNames,
    currentPage: '',
    pages: {},
    templates: [],
    newPage: {}
  },
  getters: {
    vuems_page (state) {
      return state.pages[state.currentPage] || emptyPage
    },
    vuems_templates (state) {
      return state.templates
    }
  },
  actions: {
    vuems_fetchPageData ({state, commit}, name) {
      const pageToFetch = name || state.currentPage
      getPage(pageToFetch)
        .then((response) => {
          commit('vuems_setPageData', response.data)
        })
    },
    vuems_fetchTemplates ({commit}) {
      getTemplates()
        .then((response) => {
          commit('vuems_setTemplates', response.data)
        })
    },
    vuems_setCurrentPage ({commit}, name) {
      commit('vuems_setCurrentPage', name)
    },
    vuems_saveNewPage ({state}) {
      return savePage(state.newPage)
    },
    vuems_updateNewPageData ({commit}, page) {
      commit('vuems_setNewPage', page)
    }
  },
  mutations: {
    vuems_setPageData (state, page) {
      Vue.set(state.pages, page.name, page)
    },
    vuems_setCurrentPage (state, name) {
      state.currentPage = name
    },
    vuems_setTemplates (state, templates) {
      state.templates = templates
    },
    vuems_setNewPage (state, page) {
      state.newPage = page
    }
  }
}
