import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../axios'

export const fetchNews = createAsyncThunk<any>('news/fetchNews', async () => {
  const { data } = await instance.get('/news')
  return data
})

export const fetchComments = createAsyncThunk<any, string>('comments/fetchComments', async (id) => {
  const { data } = await instance.get(`/comments/${id}`)
  return data
})
