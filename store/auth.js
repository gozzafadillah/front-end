// State
export const state = () => ({
  authenticated: false,
  token: null,
  user: {},
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
  async fetchLogin(store, payload) {
    // console.log(param)
    try {
      // console.log(data)
      // hit api to get token
      const response = await this.$axios.$post('login', payload)

      console.log(response.rescode)
      console.log(response)

      const message = response.message
      const notification = message.split(' ')
      for (let i = 0; i < notification.length; i++) {
        notification[i] =
          notification[i].charAt(0).toUpperCase() + notification[i].slice(1)
      }
      const notificationMessage = notification.join(' ')

      if (response.rescode >= 200 || response.rescode < 400) {
        store.commit('setToken', response.data.token)
        localStorage.setItem('token', JSON.stringify(response.data.token))
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

  // async fetchUsers(store) {
  //   try {
  //     const response = await this.$axios.$get('admin/users')
  //     // console.log(`Message: ${response.message}`)
  //     // console.log(response.rescode)
  //     console.log(response)
  //     store.commit('setUser', response.result)
  //   } catch (error) {
  //     console.log('Error: ', error)
  //   }
  // },

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
