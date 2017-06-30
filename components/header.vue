<template>
  <header>
    <h1 class="vuems-header__title">{{title}}</h1>
    <p class="vuems-header__disclaimer">{{disclaimer}}</p>
    <div class="vuems-header__nuxt">
      <logo/>
      <p>nuxt</p>
    </div>
  </header>
</template>

<script>
  import logo from './Logo.vue'

  export default {
    components: {
      logo
    },
    props: ['title', 'disclaimer']
  }
</script>

<style lang="sass">
.vuems-header
  &__title,
  &__disclaimer,
  &__nuxt
    text-align: center
</style>
