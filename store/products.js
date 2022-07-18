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
      const response = await this.$axios.get('products')
      store.commit('setList', response.data.result)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
  async fetchListByCategory(store, _categoryId) {
    try {
      const response = await this.$axios.get(`products/category/${_categoryId}`)
      store.commit('setListByCategory', response.data.result.products)
    } catch (error) {
      console.log('error: ', error)
    }
  },

  async fetchListDetailBySlug(store, _slug) {
    try {
      // hit api to get detail product by slug
      const response = await this.$axios.get(`detail/${_slug}`)
      this.$toast.success(`${response.data.message}!`)
      store.commit('setListDetailBySlug', response.data.result.detail)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
}
