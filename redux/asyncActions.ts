import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../axios'
import { CommentsType } from '../types'
import { removeUser } from '../utils/auth'
import { handleAxiosError } from '../utils/error'

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

export const fetchRefreshToken = createAsyncThunk(
  'auth/refreshToken',
  async ({ url, token, username }: any) => {
    const result = await instance.post(url, { refresh_token: token, username })
    if (result.status === 200) {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          ...result.data,
          username,
        }),
      )
      return result.data.access_token
    }

    // else {
    //   removeUser()
    // }
  },
)

export const fetchRemoveComment = createAsyncThunk<void, string>(
  'comments/fetchRemoveComment',
  async (id) => {
    instance.delete(`/comments/${id}`)
  },
)
