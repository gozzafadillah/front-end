<template>
  <div>
    <div>Product {{ id }}</div>
    <div>Detail by Id:</div>
    <ul v-for="(list, index) in listDetailById" :key="(list.ID, index)">
      <li>{{ list.Name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ProductDetailPage',
  computed: {
    id() {
      return this.$route.params.id
    },
    listDetailById() {
      return this.$store.getters['products/listDetailById']
    },
  },
  mounted() {
    this.$store.dispatch('products/fetchListDetailById', this.id)
  },
}
</script>
