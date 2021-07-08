import { configureStore } from '@reduxjs/toolkit'
//sliceのインポート
import { generationSlice } from './generation'
import { calculateSlice } from './calculator'

export const store = configureStore({
  reducer: {
    generationReducer: generationSlice.reducer,
    calculateReducer: calculateSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
