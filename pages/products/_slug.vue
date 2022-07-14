<template>
  <div>
    Product Detail Page {{ slug }}
    <div>
      {{ detailProduct }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetailPage',
  computed: {
    slug() {
      return this.$route.params.slug
    },
    detailProduct() {
      return this.$store.getters['products/detail']
    },
  },
  mounted() {
    this.$store.dispatch('products/fetchDetailBySlug', this.slug)
  },
}
</script>
