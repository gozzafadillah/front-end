<template>
  <div>
    <h1>Detail Category {{ id }}</h1>

    <ol v-for="item in detailCategory" :key="(item.Id, index)">
      {{
        item.Name
      }}
    </ol>
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
    detailCategory() {
      return this.$store.getters['categories/listById']
    },
  },
  mounted() {
    this.fetchDetailById()
  },
  methods: {
    fetchDetailById(id) {
      this.$store.dispatch('categories/fetchById', (id = this.id))
    },
  },
}
</script>
