export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  // Set baseURL to something different
  // api.setBaseURL('http://127.0.0.1:8000/api/')
  api.setBaseURL('https://bayeue.thisham.my.id/api/')

  // Inject to context as $api
  inject('api', api)
}
