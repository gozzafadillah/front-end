<template>
  <div>
    <div>Product {{ slug }}</div>
    <div>Detail By Slug:</div>
    <ul v-for="(list, index) in listDetailBySlug" :key="(list.ID, index)">
      <li>{{ list.Product_Slug }}</li>
      <li>{{ list.Name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DetailListProductBySlugPage',
  computed: {
    slug() {
      return this.$route.params.slug
    },
    listDetailBySlug() {
      return this.$store.getters['products/listDetailBySlug']
    },
  },
  mounted() {
    this.$store.dispatch('products/fetchListDetailBySlug', this.slug)
  },
}
</script>
