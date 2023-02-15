import React,{useState} from 'react'
import './TasksList.css';
const TasksList = ({item}) => {
  const [done, setDone] = useState({done:false});
  return (
    <div >
<div className='taskItem'>
<input type="checkbox" onChange={e=>(setDone({done:e.target.checked}))}/><h4 style={{color:done.done?"#3b71ca":"black"}}>{item.description }</h4>
</div>
    </div>
  )
}

export default TasksList