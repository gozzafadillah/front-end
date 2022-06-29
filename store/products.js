const state = () => ({
  listProduct: [
    {
      id: 1,
      name: 'Product 1',
    },
  ],
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
        // 'https://virtserver.swaggerhub.com/gozza/Payment-Point/1.0.0-beta/api/product'
        'http://3.0.50.89:19000/products'
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
