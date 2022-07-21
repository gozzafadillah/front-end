export const state = () => ({
  list: [],
  detailById: {},
})

export const getters = {
  list: (state) => state.list,
  countList: (state) => state.list.length,
  detailById: (state) => state.detailById,
  statusById: (state) => state.detailById.Status,
}

export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setDetailById(state, param) {
    state.detailById = param
  },
}

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
      store.commit('setDetailById', response.data.result)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  async getDetailCategory(_id) {
    try {
      const response = await this.$store.getters.detail(_id)
      console.log(response.data.message)
    } catch (error) {
      console.log('error: ', error)
    }
  },
}
