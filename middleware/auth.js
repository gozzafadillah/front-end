export default function ({ store, redirect }) {
  // if (!store.getters['auth/isLanding']) {
  //   redirect('/landing')
  // }
  if (!store.getters['auth/isAuthenticated']) {
    redirect('/login')
  }
}
