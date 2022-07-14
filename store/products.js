// State
export const state = () => ({
  list: [],
  listByCategory: {},
  detail: {},
})

// Getters
export const getters = {
  list: (state) => state.list,
  listByCategory: (state) => state.listByCategory,
  detail: (state) => state.detail,
}

// Mutations
export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setListByCategory(state, param) {
    state.listByCategory = param
  },
  setDetail(state, param) {
    state.detail = param
  },
}

// Actions
export const actions = {
  fetchList(store) {
    this.$axios
      .get('/api/products')
      .then((response) => {
        console.log(`Message : ${response.data.message}`)

        store.commit('setList', response.data.result)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  },
  fetchListByCategory(store, _categoryId) {
    // console.log(_categoryId)
    this.$axios
      .get(`/api/products/category/${_categoryId}`)
      .then((response) => {
        console.log(`Message : ${response.data.message}`)

        store.commit('setListByCategory', response.data.result.products)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
  async fetchDetailBySlug(store, _slug) {
    // console.log(_slug)
    try {
      // hit api to get detail product
      const response = await this.$axios.get(`/api/detail/${_slug}`)

      console.log(response.data.rescode)

      if (response.rescode >= 200 || response.rescode < 400) {
        store.commit('setDetail', response.data)
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  },
}
