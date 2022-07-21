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
          :count="countTransactions"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          dark
          :color-icon="'#fff'"
          :color-title="'#fff'"
          title="Products"
          icon="mdi-cube"
          :count="countProducts"
        />
      </v-col>
    </v-row>

    <v-row dense wrap class="mt-16">
      <v-col>
        <h4 class="text-h4 font-weight-bold mb-4">Manage Product</h4>
        <h5 class="text-h5 font-weight-bold">Categories</h5>
      </v-col>
    </v-row>

    <v-row dense wrap>
      <v-col
        v-for="(category, index) in categories"
        :key="(category.Name, index)"
        class="d-flex child-flex"
        cols="6"
        xs="3"
        sm="3"
        md="2"
        lg="2"
        xl="2"
      >
        <CategoryCard
          :category-src="category.Image"
          :category-name="category.Name"
          @click="showProductCard(category.ID, category.Name)"
        />
      </v-col>
      <v-col
        class="d-flex child-flex"
        cols="6"
        xs="3"
        sm="3"
        md="2"
        lg="2"
        xl="2"
      >
        <ButtonCard dark height="145" width="145" @click="createCategory" />
      </v-col>
    </v-row>

    <v-row dense wrap>
      <v-col class="d-flex child-flex">
        <v-card :class="['light', 'align-center', 'flat', 'card']">
          <h6 class="text-h6 mb-4">
            {{ categoryNameById }}
          </h6>
          <v-row dense wrap>
            <v-container>
              <v-row v-if="productsByCategoryLength > 0">
                <v-col
                  v-for="(product, index) in productsByCategory"
                  :key="(product.ID, index)"
                  cols="4"
                  xs="4"
                  sm="3"
                  md="2"
                  lg="1"
                  xl="1"
                >
                  <ProductCard
                    :product-src="product.Image"
                    @click="productDetailBySlug(product.Product_Slug)"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  xs="4"
                  sm="3"
                  md="2"
                  lg="1"
                  xl="1"
                  class="d-flex child-flex"
                >
                  <ButtonCard dark @click="newProduct" />
                </v-col>
              </v-row>
            </v-container>
          </v-row>

          <v-row dense wrap class="text-right">
            <v-col>
              <v-btn
                class="text-capitalize"
                color="blue"
                dark
                @click="detailCategory"
              >
                <v-icon class="mr-2">mdi-eye-circle-outline</v-icon>
                Detail
              </v-btn>
            </v-col>
          </v-row>
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
  head() {
    return {
      title: 'Products Page',
    }
  },
  computed: {
    countCustomers() {
      return this.$store.getters['accounts/countList']
    },
    countTransactions() {
      return this.$store.getters['transactions/countList']
    },
    countProducts() {
      return this.$store.getters['products/countList']
    },
    categories() {
      return this.$store.getters['categories/list']
    },
    categoryById() {
      return this.$store.getters['categories/detailById']
    },
    categoryNameById() {
      return this.$store.getters['categories/detailById'].Name
    },
    productsByCategoryLength() {
      return this.$store.getters['products/lengthListByCategory']
    },
    productsByCategory() {
      return this.$store.getters['products/listByCategory']
    },
  },
  mounted() {
    this.fetchListCategory()
    this.fetchListProducts()
    this.fetchListCustomers()
    this.fetchListTransactions()
  },
  methods: {
    categoryCardClicked() {},
    // categories
    createCategory() {
      this.$router.push('/categories/create')
    },
    detailCategory() {
      this.$router.push('/categories/' + this.categoryById.ID)
    },
    updateCategory() {
      this.$router.push('/categories/' + this.categoryById.ID)
    },
    async fetchListCategory() {
      await this.$store.dispatch('categories/fetchList')
    },

    // products
    newProduct() {
      this.$router.push('/products/create')
    },
    productDetailById(id) {
      this.$router.push(`/products/${id}`)
    },
    productDetailBySlug(slug) {
      this.$router.push(`/products/detail/${slug}`)
    },
    async showProductCard(id) {
      try {
        await this.$store.dispatch('categories/fetchListById', id)
        await this.$store.dispatch('products/fetchListByCategory', id)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async fetchListProducts() {
      await this.$store.dispatch('products/fetchList')
    },

    // customers
    async fetchListCustomers() {
      await this.$store.dispatch('customers/fetchList')
    },

    // transactions
    async fetchListTransactions() {
      await this.$store.dispatch('transactions/fetchList')
    },
  },
}
</script>
<style lang="scss" scope>
.dark {
  background-color: $bayeue-primary !important;
  color: #fff;
}
.light {
  background-color: #fff;
  color: $bayeue-dark;
}
.card {
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(6, 57, 67, 0.15) !important;
}
</style>
