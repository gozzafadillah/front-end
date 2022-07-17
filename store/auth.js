// import Cookies from 'js-cookie'
// State
export const state = () => ({
  authenticated: false,
  token: null,
  user: {},
  // token: Cookies.get('t') || null,
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
  // setToken(state, payload) {
  //   console.log(payload)
  //   state.token = payload
  //   Cookies.set('t', state.token)
  // },
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
  async fetchLogin(store, payload) {
    try {
      const response = await this.$axios.post('login', payload)
      const notification = response.data.message.split(' ')
      for (let i = 0; i < notification.length; i++) {
        notification[i] =
          notification[i].charAt(0).toUpperCase() + notification[i].slice(1)
      }
      const notificationMessage = notification.join(' ')
      // check rescode
      if (response.data.rescode >= 200 || response.data.rescode < 400) {
        store.commit('setToken', response.data.data.token)
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('user', JSON.stringify(payload))
        store.commit('setAuthenticated', true)
        store.commit('setUser', payload)
      }
      // show notification success
      this.$toast.success(`${notificationMessage}!`)
      // redirect to dashboard
      this.$router.push('/')
    } catch (error) {
      this.$toast.error(`Failed login!`)
    }
  },

  fetchLogout(store) {
    store.commit('setAuthenticated', false)
    store.commit('setToken', null)
    const notificationMessage = 'Logout Successfully, Good Bye!'
    // show notification
    this.$toast.success(`${notificationMessage}!`, {
      position: 'top-right',
      duration: 3000,
      fitToScreen: true,
    })
    // redirect to login
    this.$router.push('/login')
  },

  checkAuthenticated(store) {
    if (!this.$route.path === '/landing' && !this.$route.path === '/login') {
      store.commit('setAuthenticated', true)
    }
  },
}
