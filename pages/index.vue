<template>
  <section class="content">
    <div v-for="widget in widgets">
      <component :is="widget.meta.name + '-widget'" :content="widget.content"/>
    </div>
  </section>
</template>

<script>
import pageData from './index'
console.log(pageData)
import Vuems from '../vuems/index'
const vuems = Vuems.initPage(pageData)
export default {
  components: vuems.getWidgetComponents(),
  data: () => {
    return {
      widgets: pageData.content.widgets
    }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
