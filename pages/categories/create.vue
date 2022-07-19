<template>
  <v-container class="pa-4 pa-md-10">
    <v-row>
      <v-col cols="12" class="mb-10">
        <div class="font-weight-bold">
          <v-btn icon to="/products" class="mr-4">
            <v-icon color="#3aa2dc">mdi-arrow-left</v-icon>
          </v-btn>
          Create New Category
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <form>
          <div class="font-weight-bold title">Name</div>
          <v-text-field
            v-model="name"
            placeholder="What is the name of this category?"
            required
            solo
            flat
          ></v-text-field>

          <div class="font-weight-bold title">Upload Image</div>
          <div class="mb-6">
            <input
              id="file"
              type="file"
              name="file"
              class="upload__file mb-4"
              @change="onFileSelected"
            />
          </div>
          <!-- <input
            class="upload__file mb-4"
            type="file"
            @change="onFileSelected"
          /> -->

          <v-btn
            class="text-capitalize font-weight-bold px-10"
            color="#3aa2dc"
            dark
            large
            @click="storeCategory"
          >
            Add
          </v-btn>
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
      name: '',
      selectedFile: '',
    }
  },
  head() {
    return {
      title: 'Create Category Page',
    }
  },
  methods: {
    onFileSelected(e) {
      this.selectedFile = e.target.files[0]
    },
    async storeCategory() {
      try {
        const fd = new FormData()
        fd.append('name', this.name)
        fd.append('file', this.selectedFile, this.selectedFile.name)

        await this.$axios.post('admin/category', fd, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })

        this.$toast.success('New category created successfully!')
        this.$router.push('/products')
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
}
</script>
