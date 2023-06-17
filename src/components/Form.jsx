import React, {useState} from 'react'

const Form = ({onAdd}) => {
  const [text, setText]=useState('');
  const [day, setDay]=useState('');
  const [reminder, setReminder]=useState(false)
  // const [message, setMessage]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();


    if (!text){
      alert('Please enter a text');
    }else{
      onAdd({text, day, reminder})
    }
    
    setText('')
    setDay('')
    setReminder(false)

  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Enter Text</label>
      
      <input type="text" placeholder='Enter Text' value={text} onChange={(e) => setText(e.target.value)} />

      <label htmlFor="">Enter Date & Time</label>
      <input type="text" placeholder='Enter Text' value={day} onChange={(e)=> setDay(e.target.value)} />

      <label htmlFor="">Reminder</label>
      <input type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.value)}/>

      <input type="submit" value="Submit" />

      </form>
     
    </div>
  )
}

export default Form
