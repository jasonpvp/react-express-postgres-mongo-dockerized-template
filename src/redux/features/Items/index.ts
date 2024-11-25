import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../../types/Item'

const INITIAL_STATE: {
  items: Record<string, Item>
} = {
  items: {
    1: {
      id: 1,
      title: 'title1',
      description: 'desc1',
      timestamp: Date.now(),
      editHistory: [],
      properties: {}
    }
  }
}

const itemsSlice = createSlice({
  name: 'Items',
  initialState: INITIAL_STATE,
  reducers: {
    createItem: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload
      const id = Math.random()
      const item = {
        id,
        title,
        timestamp: Date.now(),
        editHistory: [],
        properties: {}
      }

      state.items[id] = item
    },
    updateItem: (state, action: PayloadAction<{ item: Item }>) => {
      const { item } = action.payload
      state.items[item.id] = item
    },
    deleteItem: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload
      delete state.items[id]
    }
  },
})
export const { createItem, updateItem, deleteItem } = itemsSlice.actions

export default itemsSlice.reducer