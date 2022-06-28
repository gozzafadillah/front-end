<template>
  <div>
    <v-container>
      <v-row wrap no-gutters>
        <v-col>
          <h1 class="headline font-weight-bold">Manage Product</h1>
          <h2 class="title mb-2">Category</h2>
        </v-col>
      </v-row>
      <v-row wrap>
        <v-col row cols="6">
          <CategoryCard @click="showProductCard" />
        </v-col>
        <v-col cols="6">
          <ButtonCard />
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="showProduct">
      <v-row wrap no-gutters>
        <v-col cols="12" xs="4" sm="4" md="8">
          <v-card>
            <v-card-title> Payment </v-card-title>
            <v-row>
              <v-col cols="2">
                <v-card class="mx-auto my-4 text-center" max-width="114">
                  <img src="@/assets/img/listrik.png" class="pt-4" />
                  <div class="body-1 font-weight-bold pb-4">Listrik</div>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card class="mx-auto my-4 text-center" max-width="114">
                  <img src="@/assets/img/paketdata.png" class="pt-4" />
                  <div class="body-1 font-weight-bold pb-4">Paket Data</div>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card class="mx-auto my-4 text-center" max-width="114">
                  <img src="@/assets/img/pulsa.png" class="pt-4" />
                  <div class="body-1 font-weight-bold pb-4">Pulsa</div>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card
                  class="mx-auto my-4 text-center py-8"
                  max-width="114"
                  color="primary"
                  dark
                >
                  <v-icon x-large> mdi-plus-box </v-icon>
                </v-card>
              </v-col>
            </v-row>

            <div class="text-right pr-4 pb-4">
              <v-btn color="red" large dark>
                <v-icon class="mr-2"> mdi-close </v-icon>
                Close
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CategoryCard from '@/components/CategoryCard.vue'
import ButtonCard from '@/components/ButtonCard.vue'
export default {
  name: 'ProductPage',
  components: {
    CategoryCard,
    ButtonCard,
  },
  middleware: ['auth'],
  data() {
    return {
      showProduct: false,
      activeClass: 'active',
    }
  },
  computed: {
    productList() {
      return this.$store.state.products.listProduct
    },
  },
  mounted() {
    this.fetchProductList()
  },
  methods: {
    showProductCard() {
      console.log('showedProductCard')
      this.showProduct = !this.showProduct
    },

    fetchProductList() {
      this.$store.dispatch('products/fetchProduct')
    },
  },
}
</script>
<style lang="scss" scoped>
.active__card {
  border: 2px solid $bayeue-primary;
}
</style>
