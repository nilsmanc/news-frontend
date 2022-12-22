import { AuthData, AuthParams } from './../types/index'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import instance from '../axios'
import { CommentType } from '../types'

export const fetchComments = createAsyncThunk<CommentType[], string>(
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

export const fetchRegister = createAsyncThunk<AuthData, AuthParams>(
  'auth/registration',
  async (params) => {
    const { data } = await axios.post('http://localhost:3000/auth/registration', params)
    return data
  },
)

export const fetchLogin = createAsyncThunk<any, AuthParams>('auth/login', async (params) => {
  const { data } = await axios.post('http://localhost:3000/auth/login', params)
  return { data }
})

export const fetchRemoveComment = createAsyncThunk<void, string>(
  'comments/fetchRemoveComment',
  async (id) => {
    instance.delete(`/comments/${id}`)
  },
)
