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
      const response = await this.$axios.$post('/api/login', {
        email: param.email,
        password: param.password,
      })

      console.log(response.rescode)

      if (response.rescode >= 200 || response.rescode < 400) {
        store.commit('setAuthenticated', true)
        store.commit('setToken', response.data.token)
      }
      localStorage.setItem('token', response.data.token)

      // setup notification
      const message = response.message
      const notification = message.split(' ')

      for (let i = 0; i < notification.length; i++) {
        notification[i] =
          notification[i].charAt(0).toUpperCase() + notification[i].slice(1)
      }
      const notificationMessage = notification.join(' ')

      // show notification
      this.$toast.success(`${notificationMessage}!`, {
        position: 'top-right',
        duration: 3000,
        fitToScreen: true,
      })

      // redirect to dashboard
      this.$router.push('/')
    } catch (error) {
      console.log('Error: ', error)
    }
  },

  async fetchUsers(store) {
    try {
      const response = await this.$axios.$get('admin/users')
      console.log(response.rescode)

      store.commit('setUser', response.result)
    } catch (error) {
      console.log('Error: ', error)
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
