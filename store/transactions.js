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
      const token = localStorage.getItem('token')
      console.log(token)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await this.$axios.get('admin/transaction', config)
      const data = JSON.stringify(response)
      console.log(data)
      // console.log(`Message: ${response.message}`)
      // console.log(response.rescode)
      console.log(data.message)
      store.commit('setList', response.data.result)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
}
