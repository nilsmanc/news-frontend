import { createSlice } from '@reduxjs/toolkit'
import { fetchComments } from '../asyncActions'
import { RootState } from '../store'

const initialState = {
  items: [],
}

const commentsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.items = []
    })
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(fetchComments.rejected, (state) => {
      state.items = []
    })
  },
})

export const commentsSelector = (state: RootState) => state.comments.items

export const commentsReducer = commentsSlice.reducer
