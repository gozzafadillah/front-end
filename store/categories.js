// State
export const state = () => ({
  list: [],
  listById: [],
  detailById: {},
})

// Getters
export const getters = {
  list: (state) => state.list,
  listById: (state) => state.listById,
  detailById: (state) => state.detailById,
}

// Mutations
export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setListById(state, param) {
    state.listById = param
  },
  setDetailById(state, param) {
    state.detailById = param
  },
}

// Actions
export const actions = {
  async fetchList(store) {
    try {
      const response = await this.$axios.get('category')
      store.commit('setList', response.data.result)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  async fetchListById(store, _id) {
    try {
      const response = await this.$axios.get(`category/${_id}`)
      store.commit('setListById', response.data.result)
      store.commit('setDetailById', response.data.result)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  async storeCategory() {},
  async updateCategory(_id) {
    try {
      const config = {
        headers: {},
      }
      const response = await this.$axios.put(`admin/category/${_id}`, config)
      console.log('Response: ', response)
    } catch (error) {
      console.log('error: ', error)
    }
  },
}
