<template>
  <v-container>
    <v-row justify="center" align="center" fill-height>
      <v-col cols="12" class="mb-10">
        <div class="font-weight-bold">
          <v-btn icon to="/products" class="mr-4">
            <v-icon color="#3aa2dc">mdi-arrow-left</v-icon>
          </v-btn>
          Detail Product
          <span class="text-capitalize">{{ slug }}</span>
        </div>
      </v-col>
      <v-col v-for="(list, index) in listDetailBySlug" :key="(list.ID, index)">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ list.Product_Slug }}</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ list.Name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                list.Detail_Slug
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text color="primary">
              <span class="text-capitalize">Update</span>
            </v-btn>
            <v-btn outlined rounded text color="red">
              <span class="text-capitalize">Delete</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
