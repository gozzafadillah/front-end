export default function ({ store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    redirect('/landing')
  }
  if (!store.getters['auth/isToken']) {
    redirect('/login')
  }
}
