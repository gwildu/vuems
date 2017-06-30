<template>
  <section class="vuems__container">
    <div :class="'vuems-page-settings vuems-page-settings--' + position">
      <div class="vuems-settings__type">Page</div>
      <div class="vuems-page-settings__new">Create a new page</div>
      <div class="vuems-page-settings__goto">Go to another page</div>
      <div class="vuems-page-settings__moveto--left">➠</div>
    </div>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    data: () => {
      return {
        position: 'right'
      }
    },
    computed: {
      arrow: () => {
        switch(position) {
          case 'right':
            return '➠'
          case ''
        }
      }
    }
  }
</script>

<style lang="sass">
  .vuems
    &-page-settings
      color: #444
      background-color: #ffffff88
      position: absolute
      width: 100%
      height: 50px
      padding: 5px
      display: flex
    &-settings
      &__type
        height: 40px
        border: 1px solid #444
        padding: 5px
        display: flex
        align-items: center
        font-weight: bold
        border-radius: 2px
</style>
