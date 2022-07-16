// export default function ({ $axios }, store, redirect) {
//   //   // $axios.onRequest((config) => {
//   //   //   config.headers.common.Authorization = `Bearer ${store.state.token}`
//   //   // })
//   const token = localStorage.getItem('token')
//   // $axios.defaults.headers.common.Authorization = `Bearer ${token}`
//   $axios.setHeader('Content-Type', 'application/json')
//   $axios.setHeader('Authorization', `Bearer ${token}`)
//   $axios.setToken(token, 'Bearer')
// }
