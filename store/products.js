export const state = () => ({
  list: [],
  listByCategory: [],
  listDetailById: [],
  listDetailBySlug: [],
})

export const getters = {
  list: (state) => state.list,
  countList: (state) => state.list.length,
  listByCategory: (state) => state.listByCategory,
  lengthListByCategory: (state) => state.listByCategory.length,
  listDetailBySlug: (state) => state.listDetailBySlug,
}

export const mutations = {
  setList(state, param) {
    state.list = param
  },
  setListByCategory(state, param) {
    state.listByCategory = param
  },
  setListDetailBySlug(state, param) {
    state.listDetailBySlug = param
  },
}

export const actions = {
  async fetchList(store) {
    try {
      const response = await this.$axios.get('products')
      store.commit('setList', response.data.result)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
  async fetchListByCategory(store, _categoryId) {
    try {
      const response = await this.$axios.get(`products/category/${_categoryId}`)
      if (response.data.rescode === 200) {
        store.commit('setListByCategory', response.data.result.products)
      } else {
        store.commit('setListByCategory', store.reset())
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  },

  async fetchListDetailBySlug(store, _slug) {
    try {
      const response = await this.$axios.get(`detail/${_slug}`)
      this.$toast.success(`${response.data.message}!`)
      store.commit('setListDetailBySlug', response.data.result.detail)
    } catch (error) {
      console.log('Error: ', error)
    }
  },
}
