<template>
  <div>
    <vuems-page :page="pageData">
      <component v-if="template" :is="template + '-template'">
        <vuems-widget v-if="widgets" v-for="widget in widgets" :key="widget.index" :name="widget.name" :slot="widget.slot">
          <component :is="widget.name + '-widget'" :content="widget.content"/>
        </vuems-widget>
      </component>
    </vuems-page>
  </div>
</template>

<script>
  import page from '../vuems/page-settings.vue'
  import widget from '../vuems/widget-settings.vue'
  import pageData from './index.json'
  import Vuems from '../vuems/index'
  import {mapGetters} from 'vuex'
  const vuems = Vuems.initPage(pageData)
  export default {
    components: {
      ...vuems.getComponents(),
      'vuems-page': page,
      'vuems-widget': widget
    },
    computed: {
      ...mapGetters({
        pageData: 'vuems_page'
      }),
      widgets () {
        return this.pageData && this.pageData.widgets
      },
      template () {
        return this.pageData.template
      }
    },
    async fetch ({store, route}) {
      let name = route.path === '/' ? '/index' : route.path
      name = name.replace(/\//, '').split('/').join('_')
      store.dispatch('vuems_setCurrentPage', name)
      store.dispatch('vuems_fetchPageData', name)
    }
  }
</script>

<style lang="scss"></style>
