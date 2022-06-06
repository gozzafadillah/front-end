const state = () => ({
  listProduct: [],
  productDetail: {},
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
      .get(
        'https://virtserver.swaggerhub.com/gozza/Payment-Point/1.0.0/api/product/1'
      )
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
