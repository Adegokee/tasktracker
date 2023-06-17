import Item from './Item'

const Task = ({mrEmmanuel, weDelete, toogle}) => {

  
  return (
    <div>
    {mrEmmanuel.map((x)=>(
      <Item key={x.id} x={x} weDelete={weDelete} toogle={toogle} />
    ))}
    </div>
  )
}

export default Task
