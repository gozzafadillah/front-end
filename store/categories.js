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
}

// Actions
export const actions = {
  fetchList(store) {
    this.$axios
      .get('/api/category')
      .then((response) => {
        console.log(response.data.message)
        const total = response.data.result.length
        console.log(total)
        store.commit('setList', response.data.result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
}
