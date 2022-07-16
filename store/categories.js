// State
export const state = () => ({
  list: [],
  listById: {},
  detail: {},
})

// Getters
export const getters = {
  list: (state) => state.list,
  listById: (state) => state.listById,
}

// Mutations
export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setListById(state, param) {
    state.listById = param
  },
}

// Actions
export const actions = {
  async fetchList(store) {
    try {
      const response = await this.$axios.$get('category')
      // console.log(`Message: ${response.message}`)
      // console.log(response.rescode)
      store.commit('setList', response.result)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  async fetchListById(store, _id) {
    try {
      const response = await this.$axios.$get(`category/${_id}`)
      // console.log(`Message: ${response.message}`)
      console.log(response.rescode)
      console.log(response.result)
      store.commit('setListById', response.result)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  async storeCategory() {},
  async updateCategory(_id) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
      const response = await this.$axios.$put(`admin/category/${_id}`, config)
      // console.log(`Message: ${response.message}`)
      console.log(response.rescode)
      console.log(response.result)
    } catch (error) {
      console.log('error: ', error)
    }
  },
}
