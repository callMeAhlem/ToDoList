import React from 'react'

const TasksList = ({x}) => {
  return (
    <div>
<div><label><input type="checkbox"/><h4>{x.name}</h4><p>{x.description}</p>
</label>
</div>

    </div>
  )
}

export default TasksList