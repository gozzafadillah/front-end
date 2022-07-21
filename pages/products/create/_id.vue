<template>
  <v-container class="pa-4 pa-md-10">
    <v-row>
      <v-col cols="12" class="mb-10">
        <div class="font-weight-bold">
          <v-btn icon to="/products" class="mr-4">
            <v-icon color="#3aa2dc">mdi-arrow-left</v-icon>
          </v-btn>
          Create New Product for Category {{ id }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <form>
          <div class="font-weight-bold title">Name</div>
          <v-text-field
            v-model="name"
            placeholder="What is the name of this product?"
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
          <v-btn
            class="text-capitalize font-weight-bold px-10"
            color="#3aa2dc"
            dark
            large
            @click="storeProduct"
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
  name: 'CreateProductPage',
  data() {
    return {
      name: '',
      selectedFile: '',
    }
  },
  head() {
    return {
      title: 'Create Product Page',
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    onFileSelected(e) {
      this.selectedFile = e.target.files[0]
    },
    async storeProduct() {
      try {
        const fd = new FormData()
        fd.append('name', this.name)
        fd.append('file', this.selectedFile, this.selectedFile.name)

        await this.$axios.post(`admin/products/${this.id}`, fd, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        this.$router.push(`/products`)
        this.$toast.success('Product has been created')
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
}
</script>
<!-- 
  <div class="ml-4">
    <div class="font-weight-bold display-1 mb-8">
      <v-btn icon to="/products" class="mr-4">
        <v-icon color="primary"> mdi-arrow-left </v-icon>
      </v-btn>
      Add Product-Payment
    </div>
    <div class="font-weight-bold headline mb-3">Nama Category</div>

    <v-row>
      <v-col cols="6">
        <v-text-field solo placeholder="Nama category baru"> </v-text-field>
      </v-col>
    </v-row>

    <div class="font-weight-bold headline my-3">Pilih icon</div>

    <v-card max-width="40%">
      <v-card-actions>
        <v-btn icon>
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

    <div class="font-weight-bold headline my-3">Gambar product</div>

    <v-btn color="primary" class="px-5 mt-3" large outlined>
      <v-icon class="mr-4"> mdi-upload </v-icon>
      Upload
    </v-btn>

    <div>
      <v-btn color="primary" class="px-5 mt-15" large outlined>
        <v-icon class="mr-4"> mdi-plus-box </v-icon>
        input filed
      </v-btn>

      <v-btn color="primary" class="px-5 mt-15" large outlined>
        <v-icon class="mr-4"> mdi-plus-box </v-icon>
        jenis product
      </v-btn>
    </div>

    <v-btn color="primary" class="px-16 mt-15" large> Add </v-btn>
  </div>
</template>

<script>
export default {
  name: 'CreateProduct',
}
</script>

<style></style> -->
