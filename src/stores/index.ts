import { configureStore } from '@reduxjs/toolkit'
//sliceのインポート
import { generationSlice } from './generation'

export const store = configureStore({
  reducer: {
    generationReducer: generationSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
