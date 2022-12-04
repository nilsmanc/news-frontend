import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
})

export const newsReducer = newsSlice.reducer
