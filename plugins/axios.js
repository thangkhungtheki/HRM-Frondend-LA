export default function ({ $axios , env}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
  })

  // Set baseURL to something different
  api.setBaseURL(env.BACKEND_URL)

  // Inject to context as $api
  inject('api', api)
}