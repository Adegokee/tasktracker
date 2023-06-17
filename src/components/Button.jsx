import React from 'react'

const button = ({text, MrGrant, onClick}) => {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: MrGrant}}>{text}</button>
    </div>
  )
}

export default button
