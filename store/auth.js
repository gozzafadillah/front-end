// State
export const state = () => ({
  authenticated: false,
  token: null,
  user: [],
})

// Getters
export const getters = {
  isAuthenticated(state) {
    return !!state.authenticated
  },
  isToken(state) {
    return state.token
  },
  isUser(state) {
    return state.user
  },
}

// Mutations
export const mutations = {
  setToken(state, param) {
    state.token = param
  },
  setAuthenticated(state, param) {
    state.authenticated = param
  },
  setUser(state, param) {
    state.user = param
  },
}

// Actions
export const actions = {
  async fetchLogin(store, param) {
    // console.log(param)
    try {
      // hit api to get token
      const res = await this.$api.$post('login', {
        email: param.email,
        password: param.password,
      })

      console.log(res.rescode)

      if (res.rescode >= 200 || res.rescode < 400) {
        store.commit('setAuthenticated', true)
        store.commit('setToken', res.data.token)
      }
      localStorage.setItem('token', res.data.token)
      this.$router.push('/')
    } catch (error) {
      console.log(error)
    }
  },

  async fetchUsers(store) {
    try {
      const res = await this.$api.$get('admin/users')
      console.log(res.rescode)
      store.commit('setUser', res.result)
    } catch (error) {
      console.log(error)
    }
  },

  fetchLogout(store) {
    store.commit('setAuthenticated', false)
    store.commit('setToken', null)
    console.log('Logout Success!')
    this.$router.push('/login')
  },
}
