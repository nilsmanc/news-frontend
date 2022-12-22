import { CommentType } from './../../types/index'
import { createSlice } from '@reduxjs/toolkit'

import { fetchComments, fetchRemoveComment } from '../asyncActions'
import { RootState } from '../store'

const initialState = {
  items: [],
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action) {
      state.items.push(action.payload)
    },
  },
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

    builder.addCase(fetchRemoveComment.pending, (state, action) => {
      state.items = state.items.filter((obj: CommentType) => obj._id !== action.meta.arg)
    })
  },
})

export const { addComment } = commentsSlice.actions

export const commentsSelector = (state: RootState) => state.comments.items

export const commentsReducer = commentsSlice.reducer
