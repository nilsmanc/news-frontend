import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { commentsReducer } from './slices/comments'
import { authReducer } from './slices/auth'

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
