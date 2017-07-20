<template>
  <div>
    <section class="vuems__container vuems__container--widget">
      <div :class="'vuems-settings vuems-settings--' + position">
        <h4 class="vuems-settings__type">Widget<br /><small>{{name}}</small></h4>
        <button class="vuems-settings__new vuems-button" title="Prepend a new Widget">+ ⬆</button>
        <button class="vuems-settings__goto-page vuems-button" title="Append a new Widget">+ ⬇</button>
        <button class="vuems-settings__edit vuems-button" title="Delete this widget">⨯</button>
        <button class="vuems-settings__edit vuems-button" title="Edit this widget">📝</button>
        <div class="vuems-settings__moveto">
          <button
            v-if="position !== 'top'"
            @click="position = 'top'"
            class="vuems-settings__moveto--top vuems-button"
            title="move panel to the top"
          >⬆</button>
          <button
            v-if="position !== 'bottom'"
            @click="position = 'bottom'"
            class="vuems-settings__moveto--bottom vuems-button"
            title="move panel to the bottom"
          >⬇</button>
        </div>
      </div>
      <slot></slot>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['name', 'widget'],
    data: () => {
      return {
        position: 'top'
      }
    }
  }
</script>

<style lang="sass">
  .vuems
    &__container
      &--widget
        position: relative
        .vuems
          &-settings
            position: absolute
            z-index: 9999999
            font-size: .7em
</style>
