<template>
  <v-container class="blank-center pa-10">
    <v-row class="d-flex flex-column">
      <v-col cols="12">
        <v-card-title class="font-weight-bold mb-8">
          <v-btn icon to="/products" class="mr-4">
            <v-icon color="primary"> mdi-arrow-left </v-icon>
          </v-btn>
          Create New Category
        </v-card-title>
      </v-col>

      <v-col cols="12" md="6" justify="center">
        <form @click.prevent="storeCategory">
          <div class="font-weight-bold title mb-3">Category name</div>
          <v-text-field
            v-model="category.name"
            placeholder="What is the name of this category?"
            required
            solo
          >
          </v-text-field>

          <div class="font-weight-bold title mb-3">Category icon</div>
          <v-text-field
            v-model="category.icon"
            placeholder="What is the name of this category?"
            required
            solo
          >
          </v-text-field>

          <!-- <div class="font-weight-bold title my-3">Upload Image</div>
        <v-file-input
          v-model="category.imageUrl"
          counter
          placeholder="Upload an image"
          required
          solo
        >
        </v-file-input> -->

          <!-- <v-card>
            <v-card-actions v-model="categoryIcon">
              <v-btn value="mdi-home-outline" icon>
                <v-icon color="primary"> mdi-home-outline </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="primary"> mdi-bell-outline </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="primary"> mdi-timer-sand-empty </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="primary"> mdi-hospital </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="primary"> mdi-play-box-outline </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card> -->

          <v-btn type="submit" color="primary" class="px-10 mt-10"> Add </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CreateCategoryPage',
  data() {
    return {
      category: {
        name: '',
        icon: '',
        imageUrl: '',
      },
    }
  },
  computed: {
    token() {
      // return this.$store.getters['auth/isToken']
      return this.localStorage.getItem('token')
    },
  },
  methods: {
    async storeCategory() {
      const data = this.category
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('icon', data.icon)

      // const param = {
      // name: this.category.name,
      // icon: this.category.icon,
      // imageUrl: this.category.imageUrl,
      // token: this.token,
      // }

      await this.$store.dispatch('categories/storeCategory', formData)
    },
  },
}
</script>

<style lang="scss" scoped>
.blank-center {
  height: calc(100%);
}
</style>
>
