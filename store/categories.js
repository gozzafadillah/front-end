export const state = () => ({
  list: [],
  detailById: {},
})

export const getters = {
  list: (state) => state.list,
  countList: (state) => state.list.length,
  detailById: (state) => state.detailById,
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
      const data = await this.$store.getters.detail(_id)
      this.$store.commit('setDetailById', data)
    } catch (error) {
      console.log('error: ', error)
    }
  },
  async delete(param) {
    // console.log(id)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
      await this.$axios.delete('admin/category/delete/', config, {
        param: this.ID,
      })
      this.$toast.success('Delete category successfully!')
    } catch (error) {
      console.log('error: ', error)
    }
  },
}
