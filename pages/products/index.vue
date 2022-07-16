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
          :color-title="'#fff'"
          title="Products"
          icon="mdi-cube"
          :count="countProducts"
        />
      </v-col>
    </v-row>

    <v-row dense wrap>
      <v-col>
        <v-card-title class="headline font-weight-bold"
          >Manage Product</v-card-title
        >
        <v-card-subtitle class="title font-font-weight-bold"
          >Categories</v-card-subtitle
        >
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
          @click="showProductCard(category.ID)"
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
          <v-card-title class="title">
            {{ categoryById.Name }}
          </v-card-title>

          <v-row dense wrap>
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
              <!-- {{ productsByCategory }} -->
            </v-col>
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

          <v-row dense wrap class="text-right">
            <v-col>
              <v-btn color="grey" dark @click="updateCategory">
                <v-icon>mdi-eye-circle</v-icon>
              </v-btn>
              <v-btn color="blue" dark @click="detailCategory">
                <v-icon>mdi-eye-circle-outline</v-icon>
              </v-btn>
              <v-btn color="red" dark @click.stop="showProduct = !showProduct">
                <v-icon>mdi-close</v-icon>
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
  data() {
    return {
      showProduct: true,
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
    productsByCategory() {
      return this.$store.getters['products/listByCategory']
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

    // redirect to detail category
    updateCategory() {
      this.$router.push('/categories/' + this.categoryById.ID)
    },

    // redirect to detail category
    detailCategory() {
      this.$router.push('/categories/' + this.categoryById.ID)
    },

    // redirect to detail list product by id
    productDetailById(id) {
      this.$router.push(`/products/${id}`)
    },
    // redirect to detail list product by slug
    productDetailBySlug(slug) {
      this.$router.push(`/products/detail/${slug}`)
    },

    // redirect to action in store
    // show products by category
    async showProductCard(id) {
      try {
        await this.$store.dispatch('categories/fetchListById', id)
        await this.$store.dispatch('products/fetchListByCategory', id)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async fetchListCustomer() {
      await this.$store.dispatch('customers/fetchList')
    },
    async fetchListCategory() {
      await this.$store.dispatch('categories/fetchList')
    },
    async fetchListProduct() {
      await this.$store.dispatch('products/fetchList')
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
