<template>
  <v-container>
    <v-row justify="center" align="center" fill-height>
      <v-col cols="12" class="mb-10">
        <div class="font-weight-bold">
          <v-btn icon to="/products" class="mr-4">
            <v-icon color="#3aa2dc">mdi-arrow-left</v-icon>
          </v-btn>
          Detail Category
          <span class="text-capitalize">
            {{ detail.Name }}
          </span>
        </div>
      </v-col>
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="id"
              :value="detail.ID"
              hint="readonly"
              label="ID Category"
              required
              readonly
              on-focus
            >
            </v-text-field>
            <v-text-field
              ref="name"
              :value="detail.Name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Name"
              placeholder="John Doe"
              required
            >
            </v-text-field>
            <v-img :src="detail.Image" width="45px"> </v-img>
            <v-switch
              v-model="detailStatusById"
              class="text-capitalize"
              :label="`${detailStatusById}`"
              required
            ></v-switch>
          </v-card-text>
          <v-card-actions>
            <v-btn text>Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
              dark
              color="primary"
              class="text-capitalize"
              @click="updateCetagory(detail.ID)"
            >
              Update
            </v-btn>
            <v-btn
              dark
              color="red"
              class="text-capitalize"
              @click="onClickDelete(detail.ID)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
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
  head() {
    return {
      title: 'Detail Categories Page',
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    detail() {
      return this.$store.getters['categories/detailById']
    },
    detailStatusById() {
      return this.$store.getters['categories/statusById']
    },
  },
  methods: {
    async onClickDelete() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
        await this.$axios.delete(`admin/category/delete/${this.id}`, config)
        this.$router.push('/products')
        this.$toast.success('Delete category successfully!')
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
}
</script>
