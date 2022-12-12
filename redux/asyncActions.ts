import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../axios'
import { CommentsType, NewsType } from '../types/types'

export const fetchComments = createAsyncThunk<CommentsType[], string>(
  'comments/fetchComments',
  async (id) => {
    const { data } = await instance.get(`/comments/${id}`)
    return data
  },
)
