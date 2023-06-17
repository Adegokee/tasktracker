import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Item = ({x, weDelete, toogle}) => {
  return (
    <div className={`task ${x.reminder ? 'reminder': ''}`} onDoubleClick={()=> toogle(x.id)}>
      <p>{x.text}<FaTimes style={{ color: 'red', cursor:'pointer'}} onClick={()=>weDelete(x.id) }/></p>
      <h6>{x.day}</h6>
    </div>
  )
}

export default Item
