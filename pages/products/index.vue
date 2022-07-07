<template>
  <v-container>
    <v-row dense wrap>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard icon="mdi-account" title="Admins" :count="2" />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          icon="mdi-account-multiple"
          title="Costumers"
          :count="10"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          title="Transactions"
          icon="mdi-swap-horizontal"
          :count="10"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          dark
          :color-icon="'#fff'"
          title="Products"
          icon="mdi-cube"
          :count="3"
        />
      </v-col>
    </v-row>

    <v-row dense wrap>
      <v-col class="my-4">
        <h1 class="headline font-weight-bold">Manage Product</h1>
        <h2 class="title">Category</h2>
      </v-col>
    </v-row>

    <v-row dense wrap>
      <v-col
        v-for="category in categories"
        :key="category.name"
        cols="6"
        xs="4"
        sm="4"
        md="2"
        lg="2"
        xl="2"
      >
        <CategoryCard
          :category-icon="category.icon"
          :category-name="category.name"
          @click="showProductCard"
        />
      </v-col>
      <v-col cols="6" xs="4" sm="4" md="2" lg="2" xl="2">
        <ButtonCard height="145" @click="newCategory" />
      </v-col>
    </v-row>

    <v-row v-if="showProduct" wrap>
      <v-col cols="12">
        <v-card>
          <v-card-title>Category Name</v-card-title>
          <v-row dense wrap>
            <v-col
              v-for="product in products"
              :key="product.name"
              cols="6"
              xs="4"
              sm="4"
              md="1"
              lg="1"
              xl="1"
            >
              <ProductCard
                :product-name="product.name"
                @click="productDetail"
              />
            </v-col>
            <v-col cols="6" xs="4" sm="4" md="1" lg="1" xl="1">
              <ButtonCard height="100" @click="newProduct" />
            </v-col>
          </v-row>

          <div class="text-right pr-4 pb-4">
            <v-btn color="red" large dark @click="showProductCard">
              <v-icon class="mr-2"> mdi-close </v-icon>
              Close
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CategoryCard from '@/components/CategoryCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import ButtonCard from '@/components/ButtonCard.vue'

export default {
  name: 'ProductPage',
  components: {
    CategoryCard,
    ProductCard,
    ButtonCard,
  },
  // middleware: ['auth'],
  data() {
    return {
      showProduct: false,
    }
  },
  computed: {
    products() {
      return this.$store.state.products.listProduct
    },
    categories() {
      return this.$store.state.categories.list
    },
  },
  mounted() {
    this.fetchCategories()
    // this.fetchCategoryList()
  },
  methods: {
    newCategory() {
      this.$router.push('/categories/create')
    },
    showProductCard() {
      this.showProduct = !this.showProduct
    },
    newProduct() {
      this.$router.push('/products/create')
    },
    productDetail() {
      this.$router.push('/products/detail')
    },

    // API
    // fetchProductList() {
    //   this.$store.dispatch('products/fetchProduct')
    // },
    fetchCategories() {
      this.$store.dispatch('categories/fetchList')
    },
  },
}
</script>
