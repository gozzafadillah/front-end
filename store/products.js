const state = () => ({
  listProduct: [],
})

const mutations = {
  setListProduct(state, param) {
    state.listProduct = param
  },
}

const actions = {
  fetchProduct(store) {
    // Fetch Logic
    this.$axios
      .get('products')
      .then((response) => {
        store.commit('setListProduct', response.data)
      })
      .catch((error) => {
        console.log('erorr: ', error)
      })
  },
}

export default {
  state,
  mutations,
  actions,
}
