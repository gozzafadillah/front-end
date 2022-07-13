<template>
  <div class="ml-4">
    <!-- <v-form @click.prevent="handleSubmit">
      <div class="font-weight-bold display-1 mb-8">
        <v-btn icon to="/products" class="mr-4">
          <v-icon color="primary"> mdi-arrow-left </v-icon>
        </v-btn>
        Create New Category
      </div>
      <div class="font-weight-bold headline mb-3">Category Name</div>

      <v-row column>
        <v-col cols="6">
          <v-text-field
            v-model="categoryName"
            placeholder="Nama category baru"
            required
            solo
          >
          </v-text-field>
       
          <div class="font-weight-bold headline my-3">Pilih icon</div>

          <v-card>
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
          </v-card>

         
            <v-btn type="submit" color="primary" class="px-10 mt-10" large>
              Add
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-form> -->
    <div>
      <div class="container">
        <form @submit.prevent="onSubmit">
          <!-- <div class="form-group">
            <input type="file" @change="onFileUpload" />
          </div> -->
          <div class="form-group">
            <input
              type="text"
              v-model="name"
              placeholder="Name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block btn-lg">
              Upload File
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateCategoryPage',
  data() {
    return {
      // FILE: null,
      name: '',
      categoryName: '',
      categoryIcon: '',
    }
  },
  methods: {
    // handleSubmit() {
    //   const formData = new FormData()
    //   FormData.append('categoryName', this.categoryName)
    //   FormData.append('icon', this.categoryIcon)

    //   this.$store.dispatch('categories/create', formData).then(() => {
    //     this.$router.push('/categories')
    //   })
    // },
    //  onFileUpload (event) {
    //       this.FILE = event.target.files[0]
    //     },
    onSubmit() {
      // upload file
      const formData = new FormData()
      // formData.append('avatar', this.FILE, this.FILE.name)
      formData.append('name', this.name)
      console.log(formData)
      // axios.post('API GOES HERE', formData, {}).then((res) => {
      //   console.log(res)
      // })
    },
  },
}
</script>

<style></style>
