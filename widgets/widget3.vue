<template>
  <gwi-component3 :header="data.header"></gwi-component3>
</template>

<script>
  import component3 from '../components/component3.vue'
  export default {
    components: {
      'gwi-component3': component3
    },
    props: ['data']
  }
</script>
