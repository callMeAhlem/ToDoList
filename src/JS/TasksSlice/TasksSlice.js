import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id:1,description: "GYM at 5 pm ", done: false },
    { id:2,description: "Lunch with MOM ", done: true },
    { id:3,description: "Urgent Meeting with Paul at 2 pm ", done: false },
    { id:4,description: "Buy Next week grosseries", done: true },
  ]

export const TasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
     addNewTask:(state,action)=>{
        state.push(action.payload)
     },
deletTask:(state,action)=>{
 return state.filter(el=>el.id!==action.payload.id)
},
editTask:(state,action)=>{
    return state.map(el=>el.id === action.payload.id ? action.payload:el)
  } 
}})

export const { addNewTask,deletTask ,editTask} = TasksSlice.actions

export default TasksSlice.reducer;