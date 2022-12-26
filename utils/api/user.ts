import { AxiosInstance } from 'axios'

import { AuthData, AuthDto } from '../../types'

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: AuthDto) {
    const { data } = await instance.post<AuthDto, { data: AuthData }>('/auth/registration', dto)
    return data
  },

  async login(dto: AuthDto) {
    const { data } = await instance.post<AuthDto, { data: string }>('/auth/login', dto)
    return data
  },

  async getMe() {
    const { data } = await instance.get('/auth/me')
    return data
  },
})
