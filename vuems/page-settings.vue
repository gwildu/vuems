<template>
  <section class="vuems__container">
    <div :class="'vuems-settings vuems-settings--' + position + ' vuems-settings--current-page'">
      <div class="vuems-settings__current-page-container">
        <h4 class="vuems-settings__type">Page<br /><small>{{page.name}}</small></h4>
        <button
          class="vuems-button"
          title="Add a new page"
          @click="prepareNewPage"
        >+</button>
        <button class="vuems-button" title="Go to another page">📄</button>
        <button class="vuems-button" title="Delete this page">⨯</button>
        <button class="vuems-button" title="Add a new widget to this page">+ 📦</button>
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
      <vuems-new-page
        v-if="showNewPageForm"
        :templates="templates"
        @update="updateNewPageData"
        @save="saveNewPage"
      ></vuems-new-page>
    </div>
    <section class="content">
      <slot></slot>
    </section>
  </section>
</template>

<script>
  import newPage from './new-page.vue'
  import VuemsNewPage from './new-page'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    components: {
      VuemsNewPage,
      'vuems-new-page': newPage
    },
    props: ['page'],
    data: () => {
      return {
        position: 'top',
        showNewPageForm: false
      }
    },
    computed: {
      ...mapGetters({
        'templates': 'vuems_templates'
      })
    },
    methods: {
      ...mapActions([
        'vuems_fetchTemplates',
        'vuems_updateNewPageData',
        'vuems_saveNewPage'
      ]),
      prepareNewPage () {
        this.vuems_fetchTemplates()
        this.showNewPageForm = true
      },
      updateNewPageData (pageData) {
        this.vuems_updateNewPageData(pageData)
      },
      saveNewPage () {
        this.vuems_saveNewPage()
      }
    }
  }
</script>

<style lang="sass">
  .vuems

    &__container
      display: flex
      flex-direction: column

    &-settings
      color: #444
      background-color: #ffffffdd
      /*position: absolute*/
      width: 100%
      height: 100px
      padding: 5px
      display: flex
      justify-content: space-between
      border: 1px solid rgba(255, 255, 255, .4)

      &--current-page
        flex-direction: column

      &__current-page-container
        display: flex

      &__type
        @media screen and (max-width: 450px)
          font-size: .8em

      &--top
        top: 0

      &--bottom
        bottom: 0
        order: 1

      &__moveto
        display: flex

        > *
          margin-left: 5px

    &-button
      font-size: 1em
      height: 40px
      border: 1px solid #444
      padding: 5px
      font-weight: bold
      border-radius: 2px
      flex-grow: 1
      margin: 0 5px
      text-align: center
      cursor: pointer
      @media screen and (max-width: 450px)
        font-size: .8em
        line-height: .9
        /*margin: 0 3px*/
        /*padding: 3px*/

      &:hover
        background-color: rgba(0, 0, 0, 0.5)
        color: #ffffff88
</style>
