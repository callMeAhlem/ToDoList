import React from 'react'
import './TaskInput.css'

const Filter = ({setSearch}) => {
  return (
    <div className='addBox' style={{width:'20%',marginLeft:'10px',height:'30px',marginBottom:'50px'}}>
<input type='text' placeholder='Search...' onChange={e=>setSearch(e.target.value)}  />
    </div>
  )
}

export default Filter