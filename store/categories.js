// State
export const state = () => ({
  list: [],
  listById: {},
})

// Getters
export const getters = {
  list: (state) => state.list,
  listById: (state) => state.listById,
  listName: (state) => (ID) => {
    return state.list[ID].Name
  },
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
        console.log(response.data.result)
        store.commit('setListById', response.data.result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
  createList(store, param) {
    this.$axios
      .post('/api/category', param)
      .then((response) => {
        console.log(`Message : ${response.data.message}`)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  },
}
