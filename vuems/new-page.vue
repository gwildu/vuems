<template>
  <div class="vuems-new-page">
    <input class="vuems-new-page__path" model="newPagePath"/>
    <select class="vuems-new-page__template" model="templates">
      <option v-if="templates.length === 0">Please create a template first</option>
      <option v-else>Please chose a template</option>
      <option
        v-for="template in templates"
        :value="template"
      >{{template}}</option>
    </select>
    <button
      class="vuems-button"
      @click="safe"
    >safe</button>
  </div>
</template>

<script>
  export default {
    props: {
      templates: {
        type: Array,
        default: () => {
          return []
        }
      },
      pageData: {
        type: Object,
        default: {
          name: 'new_page',
          template: 'default'
        }
      }
    },
    methods: {
      safe () {
        this.$emit('saved')
      }
    }
  }
</script>

<style></style>
