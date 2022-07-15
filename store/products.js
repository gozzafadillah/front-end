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
      const response = await this.$axios.get('/api/products')
      console.log(`Message : ${response.data.message}`)
      store.commit('setList', response.data.result)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
  async fetchListByCategory(store, _categoryId) {
    // console.log(_categoryId)
    try {
      const response = await this.$axios.get(
        `/api/products/category/${_categoryId}`
      )
      console.log(`Message : ${response.data.message}`)
      store.commit('setListByCategory', response.data.result.products)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  async fetchListDetailById(store, _id) {
    // console.log(id)
    try {
      // hit api to get detail product by id
      const response = await this.$axios.get(`/api/products/${_id}`)
      console.log(`Message : ${response.data.message} for ${_id}`)
      store.commit('setListDetailById', response.data.result.detail)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
  async fetchListDetailBySlug(store, _slug) {
    // console.log(id)
    try {
      // hit api to get detail product by id
      const response = await this.$axios.get(`/api/detail/${_slug}`)
      console.log(`Message : ${response.data.message} for ${_slug}`)
      store.commit('setListDetailBySlug', response.data.result.detail)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
}
