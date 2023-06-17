
import React, {useState} from 'react'
import './index.css'
import Task from './components/Task'
import Header from './components/Header'
import Form from './components/Form'
// import { FaContao } from 'react-icons/fa'

const what= 'No Task Is Available'
const App = () => {
  const [showForm, setShowForm]=useState(true)
const [task, setTask]=useState([

  {
    id:1,
    text:'Doctors schedule',
    day: 'Fed 5th at 2:30pm',
    reminder: true,
  },
  {
    id:2,
    text:'Metting at school',
    day: 'Fed 6th at 1:30pm',
    reminder: true,
  },
  {
    id:3,
    text:'Food Shopping',
    day: 'Fed 7th at 3:30pm',
    reminder: false,
  }

])

const deletetask= (id) => {
setTask(task.filter((x)=> x.id  !=id))
console.log(id)
}

const toogleReminder= (id) => {
  setTask(task.map((x)=> x.id === id ? {...x, reminder: !x.reminder}: x))
console.log(id)
}

const addTask= (item) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const addNew= {id, ...item}
  console.log(addNew)
  setTask([addNew, ...task])
  

}

 
  return (
    <div>
      <Header title={'Task Traker'} onClick={()=> setShowForm(!showForm)} display={showForm}/>
     { showForm &&  <Form  onAdd={addTask}/>}
      { task.length > 0 ? <Task mrEmmanuel={task} weDelete={deletetask} toogle={toogleReminder} />: what }
    </div>
  )
}

export default App
