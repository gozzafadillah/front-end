import Cookies from 'js-cookie'

export default function ({ $axios, store }) {
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setToken(Cookies.get('t'), 'Bearer')
}
