<template>
  <div class="vuems-new-page">
    <input
      class="vuems-new-page__path"
      v-model="path"
      @input="update"
    />
    <select
      class="vuems-new-page__template"
      v-model="pageTemplate"
      @change="update"
    >
      <option v-if="templates.length === 0" disabled value="">Please create a template first</option>
      <option v-else disabled value="">Please chose a template</option>
      <option
        v-for="template in templates"
        :value="template"
      >{{template}}</option>
    </select>
    <button
      class="vuems-button"
      @click="save"
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
      }
    },
    data () {
      return {
        path: 'new-page',
        pageTemplate: ''
      }
    },
    computed: {
      newPageData () {
        return {
          name: this.path.split('/').join('_'),
          template: this.pageTemplate
        }
      }
    },
    methods: {
      update (e) {
        this.$emit('update', this.newPageData)
      },
      save () {
        this.$emit('save')
      }
    }
  }
</script>

<style></style>
