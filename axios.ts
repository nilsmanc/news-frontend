import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

instance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    config.headers!.Authorization = window.localStorage.getItem('access_token')
  }
  return config
})

export default instance
