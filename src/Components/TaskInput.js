import React,{useState} from 'react'
import './TaskInput.css'
const TaskInput = ({fnc}) => {
  const [newTask,setNewTask]=useState({description:"",done:false});
  return (
    <div className='addBox'>
      <input type='text' placeholder='Add New Task...' onChange={e=>(setNewTask({...newTask,description:e.target.value}))} />
      <button onClick={()=>fnc(newTask)}>Add</button>
    </div>
  )
}

export default TaskInput