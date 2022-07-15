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
  fetchList(store) {
    this.$axios
      .get('/api/category')
      .then((response) => {
        console.log(`Message : ${response.data.message}`)
        store.commit('setList', response.data.result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
  fetchListById(store, _id) {
    this.$axios
      .get(`/api/category/${_id}`)
      .then((response) => {
        console.log(`Message : ${response.data.message}`)
        // console.log(response.data.result)
        store.commit('setListById', response.data.result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
  async storeCategory(data) {
    // console.log(param)

    const response = await this.$axios.post('/api/admin/category', data)
    console.log(response)

    // try {
    //   // const token = param.token
    //   const token = this.localStorage.getItem('token')
    //   console.log(token)

    //   const response = await this.$axios.$post('/api/admin/category', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       ...data.getHeaders(),
    //     },
    //     data: { data },
    //   })
    //   console.log(response)
    // } catch (error) {
    //   console.log(error)
    // }
  },
}
