export const state = () => ({
  list: [],
})

export const mutations = {
  setList(state, param) {
    state.list = param
  },
}

export const actions = {
  fetchList(store) {
    this.$axios
      .get('http://127.0.0.1:8000/api/schools', {
        headers: {
          Authorization: `Token ${this.$cookies.get('token')}`,
        },
      })
      .then((res) => {
        store.commit('setList', res.data)
      })
      .catch((err) => console.log(err))
  },
}
