// State
export const state = () => ({
  list: [],
})

// Getters
export const getters = {
  list: (state) => state.list,
}

// Mutations
export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setListByCategory(state, param) {
    state.listByCategory = param
  },
  setCount(state, param) {
    state.count = param
  },
}

// Actions
export const actions = {
  fetchList(store) {
    this.$axios
      .get('/api/admin/users')
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
  fetchCount(store) {
    this.$axios
      .get('/api/products/count')
      .then((response) => {
        console.log(response.data.message)
        store.commit('setCount', response.data.result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
}
