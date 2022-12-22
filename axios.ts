import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

instance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const access_token = window.localStorage.getItem('authToken')

    config.headers!.Authorization = access_token
  }
  return config
})

export default instance
