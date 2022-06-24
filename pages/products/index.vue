<template>
  <div>
    <h1>Products</h1>
    <div v-for="(product, index) in productList" :key="(product.name, index)">
      <div>{{ product.code }}</div>
      <div>{{ product.name }}</div>
      <div>{{ product.description }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.category_id }}</div>
      <div>{{ product.status }}</div>
    </div>
    <div class="container">
      <v-row>
        <v-col>
          <CategoryCard icon="mdi-account" title="Admins" :count="2" />
        </v-col>
        <v-col>
          <CategoryCard
            icon="mdi-account-multiple"
            title="Costumers"
            :count="10"
          />
        </v-col>
        <v-col>
          <CategoryCard
            title="Transactions"
            icon="mdi-swap-horizontal"
            :count="10"
          />
        </v-col>
        <v-col>
          <CategoryCard
            color-icon="#fff"
            dark
            color="primary"
            title="Products"
            icon="mdi-cube"
            :count="3"
          />
        </v-col>
      </v-row>
    </div>

    <div class="container">
      <div class="headline font-weight-bold mt-6 mb-3">Manage Product</div>
      <div class="title mb-2">Category</div>

      <div class="category">
        <v-row>
          <v-col cols="2">
            <v-card class="text-center py-8" @click="payment()" height="160">
              <img height="50%" src="../../assets/payment2.png" />
              <div class="title font-weight-bold">Payment</div>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="text-center py-8" @click="topUp()" height="160">
              <img height="50%" src="../../assets/top up.png" />
              <div class="title font-weight-bold">Top Up</div>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="text-center py-8" @click="transfer()" height="160">
              <img height="50%" src="../../assets/transfer.png" />
              <div class="title font-weight-bold">Transfer</div>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card
              class="text-center py-14"
              @click="addCategory()"
              height="160"
              color="primary"
              dark
            >
              <v-icon x-large> mdi-plus-box </v-icon>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="container">
      <v-card>
        <v-card-title> Payment </v-card-title>
        <v-row>
          <v-col cols="2">
            <v-card class="mx-auto my-4 text-center" max-width="114">
              <img src="../../assets/listrik.png" class="pt-4" />
              <div class="body-1 font-weight-bold pb-4">Listrik</div>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="mx-auto my-4 text-center" max-width="114">
              <img src="../../assets/paket data.png" class="pt-4" />
              <div class="body-1 font-weight-bold pb-4">Paket Data</div>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="mx-auto my-4 text-center" max-width="114">
              <img src="../../assets/pulsa.png" class="pt-4" />
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
    </div>
  </div>
</template>
<script>
import CategoryCard from '@/components/CategoryCard.vue'
export default {
  name: 'ProductPage',
  components: {
    CategoryCard,
  },
  middleware: ['auth'],
  data() {
    return {}
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
    fetchProductList() {
      this.$store.dispatch('products/fetchProduct')
    },
  },
}
</script>
