import React from 'react'
import Button from './Button'

const Header = ({title, onClick, display}) => {
  return (
    <div style={{ display:'flex', justifyContent:'space-around', alignItems:'center'}}>
      <h1>{title}</h1>
      <Button text={ display? 'close':'Add'} MrGrant={ display ? 'red':'green'} onClick={onClick} />
    </div>
  )
}

export default Header
