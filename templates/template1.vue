<template>
  <section id="template">
    <section id="flex" class="slot--flex">
      <slot name="flex"></slot>
    </section>
    <section id="standard" class="slot--standard">
      <slot></slot>
    </section>
  </section>
</template>

<script></script>

<style lang="scss">
  .slot {
    &--standard {
      background-color: beige;
    }
    &--flex {
      background-color: lightblue;
      display: flex;
    }
  }
</style>
