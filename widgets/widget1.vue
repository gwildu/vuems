<template>
  <gwi-component1 :header="data.header"></gwi-component1>
</template>

<script>
  import component1 from '../components/component1.vue'
  export default {
    components: {
      'gwi-component1': component1
    },
    props: ['data']
  }
</script>
