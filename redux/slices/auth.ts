import { HYDRATE } from 'next-redux-wrapper'
import { createSlice } from '@reduxjs/toolkit'

import { RootState } from './../store'

const initialState = {
  data: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload
    },
    logout: (state) => {
      state.data = null
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      }
    },
  },
})

export const { logout, setUserData } = authSlice.actions

export const authDataSelector = (state: RootState) => state.auth.data

export const authReducer = authSlice.reducer
