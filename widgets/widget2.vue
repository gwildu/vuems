<template>
  <gwi-component2 :header="data.header"></gwi-component2>
</template>

<script>
  import component2 from '../components/component2.vue'
  export default {
    components: {
      'gwi-component': component2
    },
    props: ['data']
  }
</script>
