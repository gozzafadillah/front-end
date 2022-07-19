export const state = () => ({
  list: [],
})

export const getters = {
  list: (state) => state.list,
  countList: (state) => state.list.length,
}

export const mutations = {
  setList(state, param) {
    state.list = param
  },
}

export const actions = {
  async fetchList(store) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
      const response = await this.$axios.get('admin/transaction', config)
      store.commit('setList', response.data.result)
    } catch (error) {
      console.log(error)
    }
  },
}
