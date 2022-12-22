import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from './../store'
import { fetchLogin, fetchRegister } from '../asyncActions'
import { AuthData } from '../../types'

const initialState = {
  data: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.data = null
    })
    builder.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<AuthData>) => {
      state.data = action.payload
    })
    builder.addCase(fetchLogin.rejected, (state) => {
      state.data = null
    })
    builder.addCase(fetchRegister.pending, (state) => {
      state.data = null
    })
    builder.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<AuthData>) => {
      state.data = action.payload
    })
    builder.addCase(fetchRegister.rejected, (state) => {
      state.data = null
    })
  },
})

export const { logout } = authSlice.actions

export const authSelector = (state: RootState) => Boolean(state.auth.data)

export const authDataSelector = (state: RootState) => state.auth.data

export const authReducer = authSlice.reducer
