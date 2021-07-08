import { configureStore } from '@reduxjs/toolkit'
//sliceのインポート
import { calculateSlice } from './calculator'

export const store = configureStore({
  reducer: {
    calculateReducer: calculateSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
