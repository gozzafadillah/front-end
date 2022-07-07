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
  api.setBaseURL(
    'https://43a5-2001-448a-3020-6ad2-a0d3-1272-4793-139f.ap.ngrok.io/'
  )

  // Inject to context as $api
  inject('api', api)
}
