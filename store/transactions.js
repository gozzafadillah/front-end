export const state = () => ({
  list: [],
  detail: [],
})

export const getters = {
  list: (state) => state.list,
  countList: (state) => state.list.length,
  detail: (state) => state.detail,
  items: (state) => state.detail.items,
  customer: (state) => state.detail.customer,
}

export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setDetail(state, param) {
    state.detail = param
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
  async fetchDetailByPaymentId(store, id) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
      const response = await this.$axios.get(
        `admin/detail_transaction/${id}`,
        config
      )
      console.log(response.data.result)
      store.commit('setDetail', response.data.result)
    } catch (error) {
      console.log(error)
    }
  },
}
