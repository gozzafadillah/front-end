<template>
  <div>
    <h1>Products</h1>
    <div v-for="(product, index) in productList" :key="(product.name, index)">
      <div>{{ product.code }}</div>
      <div>{{ product.name }}</div>
      <div>{{ product.description }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.category_id }}</div>
      <div>{{ product.status }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductPage',
  computed: {
    productList() {
      return this.$store.state.products.listProduct
    },
  },
  mounted() {
    this.fetchProductList()
  },
  methods: {
    fetchProductList() {
      this.$store.dispatch('products/fetchProduct')
    },
  },
  middleware: ['auth'],
}
</script>
