import { AxiosInstance } from 'axios'

import { CommentType } from '../../types'

type CreateCommentDto = {
  newsItem: string
  text: string
}

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll(newsId: string) {
    const { data } = await instance.get<CommentType[]>(`/comments/${newsId}`)
    return data
  },

  async create(dto: CreateCommentDto) {
    const { data } = await instance.post<CreateCommentDto, { data: CommentType }>('/comments', dto)
    return data
  },

  async remove(id: string) {
    return instance.delete(`/comments/${id}`)
  },
})
