// State
export const state = () => ({
  list: [],
  listByCategory: [],
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
      .get('/api/category')
      .then((response) => {
        console.log(response.data.message)
        store.commit('setList', response.data.result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
  fetchListByCategory(store, categoryId) {
    console.log(categoryId)
    this.$axios
      .get('/api/products/category/' + categoryId)
      .then((response) => {
        console.log(response.data.message)
        console.log(response.data.result.products)
        store.commit('setListByCategory', response.data.result.products)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
}
