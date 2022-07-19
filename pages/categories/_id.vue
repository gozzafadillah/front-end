<template>
  <div>
    <h1>Detail category {{ id }}</h1>
    <div>{{ detail.ID }}</div>
    <div>{{ detail.Name }}</div>
    <div>
      <v-img :src="detail.Image" width="45px"> </v-img>
    </div>
    <div>{{ detail.Status }}</div>
    <v-btn>Update</v-btn>
    <v-btn @click="onClickDelet(detail.ID)">Delete</v-btn>
  </div>
</template>
<script>
export default {
  name: 'DetailCategoriesPage',
  data() {
    return {
      categoryId: '',
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    detail() {
      return this.$store.getters['categories/detailById']
    },
  },
  methods: {
    async onClickDelet(id) {
      await this.$store.dispatch('categories/delete', id)
    },
  },
}
</script>
