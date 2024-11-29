import { configureStore } from '@reduxjs/toolkit'
import items from './features/Items'

const store = configureStore({
  reducer: {
    items
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store