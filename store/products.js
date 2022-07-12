// State
export const state = () => ({
  list: [],
  listByCategory: {},
})

// Getters
export const getters = {
  list: (state) => state.list,
  listByCategory: (state) => state.listByCategory,
}

// Mutations
export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setListByCategory(state, param) {
    state.listByCategory = param
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
        console.log(response.data.result.products)

        store.commit('setListByCategory', response.data.result.products)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
}
