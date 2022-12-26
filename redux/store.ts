import { createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { authReducer } from './slices/auth'

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<RootStore>(makeStore)
