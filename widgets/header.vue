<template>
  <header-component :title="content.title" :disclaimer="content.disclaimer" />
</template>

<script>
  import header from '../components/header.vue'

  export default {
    components: {
      'header-component': header
    },
    props: ['content']
  }
</script>
