import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addNewTask } from '../JS/TasksSlice/TasksSlice';
import './TaskInput.css'
const TaskInput = () => {
  const dispatch=useDispatch()
  const [newTask,setNewTask]=useState({description:"",done:false});
  return (
    <div className='addBox'>
      <input type='text' placeholder='Add New Task...' onChange={e=>(setNewTask({...newTask,description:e.target.value}))} />
      <button onClick={()=>dispatch(addNewTask(newTask))}>Add</button>
    </div>
  )
}

export default TaskInput