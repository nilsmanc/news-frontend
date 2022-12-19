import { RootState } from './../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchLogin, fetchRegister, fetchRefreshToken } from '../asyncActions'

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
    builder.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<any>) => {
      state.data = action.payload
    })
    builder.addCase(fetchLogin.rejected, (state) => {
      state.data = null
    })
    builder.addCase(fetchRegister.pending, (state) => {
      state.data = null
    })
    builder.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<any>) => {
      state.data = action.payload
    })
    builder.addCase(fetchRegister.rejected, (state) => {
      state.data = null
    })
    builder.addCase(fetchRefreshToken.pending, (state) => {
      state.data.accessToken = null
    })
    builder.addCase(fetchRefreshToken.fulfilled, (state, action) => {
      state.data.accessToken = action.payload
    })
    builder.addCase(fetchRefreshToken.rejected, (state) => {
      state.data.accessToken = null
    })
  },
})

export const { logout } = authSlice.actions

export const authSelector = (state: RootState) => Boolean(state.auth.data)

export const authDataSelector = (state: RootState) => state.auth.data

export const authReducer = authSlice.reducer
