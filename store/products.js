// State
export const state = () => ({
  list: [],
  listByCategory: [],
  listDetailById: [],
  listDetailBySlug: [],
})

// Getters
export const getters = {
  list: (state) => state.list,
  listByCategory: (state) => state.listByCategory,
  listDetailById: (state) => state.listDetailById,
  listDetailBySlug: (state) => state.listDetailBySlug,
}

// Mutations
export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setListByCategory(state, param) {
    state.listByCategory = param
  },
  setListDetailById(state, param) {
    state.listDetailById = param
  },
  setListDetailBySlug(state, param) {
    state.listDetailBySlug = param
  },
}

// Actions
export const actions = {
  async fetchList(store) {
    try {
      const response = await this.$axios.$get('products')
      // console.log(`Message: ${response.message}`)
      // console.log(response.rescode)
      store.commit('setList', response.result)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
  async fetchListByCategory(store, _categoryId) {
    // console.log(_categoryId)
    try {
      const response = await this.$axios.$get(
        `products/category/${_categoryId}`
      )
      console.log(`Message: ${response.message}`)
      console.log(response.rescode)
      store.commit('setListByCategory', response.result.products)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  // async fetchListDetailById(store, _id) {
  //   // console.log(id)
  //   try {
  //     // hit api to get detail product by id
  //     const response = await this.$axios.$get(`products/${_id}`)
  //     console.log(`Message: ${response.message}`)
  //     console.log(response.rescode)
  //     console.log(response.result)
  //     store.commit('setListDetailById', response.result)
  //   } catch (error) {
  //     console.log('Error: ', error)
  //   }
  // },
  async fetchListDetailBySlug(store, _slug) {
    // console.log(slug)
    try {
      // hit api to get detail product by slug
      const response = await this.$axios.$get(`detail/${_slug}`)
      console.log(`Message : ${response.message} for ${_slug}`)
      store.commit('setListDetailBySlug', response.result.detail)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
}
