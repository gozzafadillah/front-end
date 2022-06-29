export const state = () => ({
  listCategory: [
    {
      id: 1,
      name: 'Pulsa',
      icon: 'mdi-phone',
    },
  ],
  showProducts: false,
})

export const mutations = {
  setListCategory(state, param) {
    state.listCategory = param
  },
  setShowProducts(state, param) {
    state.showProducts = param
  },
}

export const actions = {}
