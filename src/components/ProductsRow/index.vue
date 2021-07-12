<template>
  <div :class="['product-row', { reverce }]">
    <div class="product-row__content">
      <h2 class="product-row__title">{{ title }}</h2>
      <span class="product-row__description">{{ description }}</span>
    </div>

    <div class="product-row__products">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <div class="product-card__image-box">
          <img
            :src="product.image"
            :alt="product.name"
            class="product-card__image"
          />
        </div>

        <div class="product-card__content">
          <h4>{{ product.name }}</h4>
          <span>{{ product.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsRow',

  props: {
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    reverce: {
      type: Boolean,
    },

    products: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style src="./products-row.scss" lang="scss" scoped />
