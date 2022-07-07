export const state = () => ({
  token: null,
})

// export const getters = {
//   isAuthenticated(state) {
//     return !!state.token
//   },
// }

export const mutations = {
  setToken(state, param) {
    state.token = param
  },
}

export const actions = {
  setToken(store, param) {
    store.commit('setToken', param)
  },

  async fetchLogin(store, param) {
    try {
      const res = await this.$api.$post('login', {
        email: param.email,
        password: param.password,
      })

      localStorage.setItem('token', res.result.jwt)
      this.$router.push('/')
    } catch (error) {}
    // this.$axios
    //   .post('http://127.0.0.1:8000/api/login', {
    //     email: param.email,
    //     password: param.password,
    //   })
    //   .then((res) => {
    //     this.$cookies.set('token', res.data.result.jwt, {
    //       path: '/',
    //       maxAge: 60 * 60 * 24 * 7,
    //     })

    //     store.commit('setToken', res.data.result.jwt)
    //     this.$router.push('/')
    //   })
    //   .catch((err) => console.log(err))
  },

  fetchLogout(store) {
    localStorage.removeItem('token')
  },
}
