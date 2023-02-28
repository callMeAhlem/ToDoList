import { configureStore } from '@reduxjs/toolkit'
import TasksSlice from './TasksSlice/TasksSlice'

export const store = configureStore({
  reducer: {
    Tasks:TasksSlice
  },
})