<template>
  <div>
    <h1>{{header}}</h1>
    <gwi-elmement1></gwi-elmement1>
  </div>
</template>

<script>
  import element from '../elements/element1.vue'
  export default {
    components: {
      'gwi-element1': element
    },
    props: ['header']
  }
</script>
