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
  async fetchList(store) {
    try {
      const response = await this.$axios.$get('admin/users')
      // console.log(`Message: ${response.message}`)
      // console.log(response.rescode)
      store.commit('setList', response.result)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
}
