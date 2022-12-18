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

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (id) => {
  const { data } = await instance.get('/auth/me')
  return data
})

export const fetchRegister = createAsyncThunk<any, any>('auth/registration', async (params) => {
  const { data } = await instance.post('/auth/registration', params)
  return data
})

export const fetchLogin = createAsyncThunk<any, any>('auth/login', async (params) => {
  const { data } = await instance.post('/auth/login', params)
  return { data }
})
