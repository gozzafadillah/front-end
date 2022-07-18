<template>
  <div>
    <h1>Update category {{ id }}</h1>
    <ol v-for="(category, index) in listByID" :key="(category.ID, index)">
      <li>{{ category.ID }}</li>
      <li>{{ category.Name }}</li>
      <li>{{ category.Image }}</li>
      <li>{{ category.Status }}</li>
    </ol>

    <div></div>
  </div>
</template>
<script>
export default {
  name: 'DetailCategoriesPage',
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    listByID() {
      return this.$store.getters['categories/detailById']
    },
  },
  mounted() {
    this.fetchListById()
  },
  methods: {
    fetchListById() {
      this.$store.dispatch('categories/fetchListById', this.id)
    },
  },
}
</script>
