import { AxiosInstance } from 'axios'

import { NewsType } from '../../types'

export const NewsApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<NewsType[]>('/news')
    return data
  },

  async getOne(id: number) {
    const { data } = await instance.get<NewsType>(`/news/${id}`)
    return data
  },

  async getByCategory(category: string) {
    const { data } = await instance.get<NewsType[]>('/news')
    return data
  },
})
