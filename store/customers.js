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
      .get('/api/admin/users')
      .then((response) => {
        console.log(`Message : ${response.data.message}`)
        store.commit('setList', response.data.result)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  },
}
