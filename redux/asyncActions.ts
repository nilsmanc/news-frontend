import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../axios'

export const fetchNews = createAsyncThunk<any>('news/fetchNews', async () => {
  const { data } = await instance.get('/news')
  return data
})
