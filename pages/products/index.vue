<template>
  <v-container>
    <v-row dense wrap>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard icon="mdi-account" title="Admins" :count="1" />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          icon="mdi-account-multiple"
          title="Customers"
          :count="countCustomers"
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
          :count="countProducts"
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
        v-for="(category, index) in categories"
        :key="(category.Name, index)"
        cols="6"
        xs="4"
        sm="4"
        md="2"
        lg="2"
        xl="2"
      >
        <CategoryCard
          :category-icon="category.icon"
          :category-name="category.Name"
          @click="showProductCard(category.ID)"
        />
      </v-col>
      <v-col cols="6" xs="4" sm="4" md="2" lg="2" xl="2">
        <ButtonCard height="145" @click="createCategory" />
      </v-col>
    </v-row>

    <v-row v-if="showProduct" wrap>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ categoryById.Name }}
          </v-card-title>
          <v-row dense wrap>
            <v-col
              v-for="(product, index) in productsByCategory"
              :key="(product.Name, index)"
              cols="6"
              xs="4"
              sm="4"
              md="1"
              lg="1"
              xl="1"
            >
              <ProductCard
                :product-name="product.Name"
                @click="productDetail"
              />
            </v-col>
            <v-col cols="6" xs="4" sm="4" md="1" lg="1" xl="1">
              <ButtonCard height="100" @click="newProduct" />
            </v-col>
          </v-row>

          <div class="text-right pr-4 pb-4">
            <v-btn
              color="red"
              large
              dark
              @click.stop="showProduct = !showProduct"
            >
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
  middleware: ['auth'],
  data() {
    return {
      showProduct: false,
    }
  },
  computed: {
    countCustomers() {
      return this.$store.getters['customers/list'].length
    },
    countProducts() {
      return this.$store.getters['products/list'].length
    },
    categories() {
      return this.$store.getters['categories/list']
    },
    categoryById() {
      return this.$store.getters['categories/listById']
    },
    categoryName() {
      return this.$store.getters['categories/categoryName']
    },
    productsByCategory() {
      return this.$store.state['products/listByCategory']
    },
  },
  mounted() {
    this.fetchListCustomer()
    this.fetchListCategory()
    this.fetchListProduct()
    // this.fetchListProductByCategory()
  },
  methods: {
    // redirect to create category
    createCategory() {
      this.$router.push('/categories/create')
    },

    // redirect to create product
    newProduct() {
      this.$router.push('/products/create')
    },

    // redirect to detail product
    productDetail() {
      this.$router.push('/products/detail')
    },

    // redirect to action in store
    // show products by category
    showProductCard(id) {
      // show product card
      this.showProduct = !this.showProduct
      // fetch category by id
      this.$store.dispatch('categories/fetchListById', id)
      // fetch list product by category
      this.$store.dispatch('products/fetchListByCategory', id)
    },
    fetchListCustomer() {
      this.$store.dispatch('customers/fetchList')
    },
    fetchListCategory() {
      this.$store.dispatch('categories/fetchList')
    },
    fetchListProduct() {
      this.$store.dispatch('products/fetchList')
    },
    // fetchListProductByCategory(categoryId) {
    //   this.showProduct = !this.showProduct
    //   this.$store.dispatch('products/fetchListByCategory', categoryId)
    // },
  },
}
</script>
