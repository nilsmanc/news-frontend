import { createSlice } from '@reduxjs/toolkit'
import { fetchNews } from '../asyncActions'
import { RootState } from '../store'

const initialState = {
  items: [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.items = []
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(fetchNews.rejected, (state) => {
      state.items = []
    })
  },
})

export const newsSelector = (state: RootState) => state.news.items

export const newsReducer = newsSlice.reducer
