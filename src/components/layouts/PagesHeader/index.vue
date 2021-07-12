<template>
  <div class="pages-header">
    <h1>{{ title }}</h1>
    <span>{{ subTitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'PagesHeader',

  props: {
    title: {
      type: String,
      required: true,
    },

    subTitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style src="./pages-header.scss" lang="scss" scoped />
