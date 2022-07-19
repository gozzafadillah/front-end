<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-file>{{ detail.ID }}</v-text-file>
        <div>{{ detail.Name }}</div>
        <div>
          <v-img :src="detail.Image" width="45px"> </v-img>
        </div>
        <div>{{ detail.Status }}</div>
        <v-btn>Update</v-btn>
        <v-btn dark flat color="red" @click="onClickDelet(detail.ID)"
          >Delete</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
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
