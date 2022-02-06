import React, {useState} from 'react';
import './App.css';

function TodoBar() {
  //Add input value
  const[newTask, setNewTask] = useState('')
  //Add new task into task array
  const[tasks, setTasks] = useState([])

  function addTask() {
    setTasks([...tasks, newTask])
  }

  //use map function to return HTML content from array
  const taskList = tasks.map((object, index)=>{
    return <div>
      
      <h1>{object}</h1>
      <button>DELETE</button>

    </div>
  })
  
  return (
    <form className="todo-form"> 
      <input 
      className="todo-item"
      type="text"
      placeholder="Do laundry..."
      value={newTask}
      onChange={(e)=>{setNewTask(e.target.value)}}
      />
     <button onClick={addTask} className="add-button">Add task</button>
     {taskList}
    </form>
   
  )
}

  export default TodoBar;
  