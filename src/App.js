import React, { useState } from 'react';
import './App.css';

function App () {
  function TodoBar() {
    //Add input value
    const[newTask, setNewTask] = useState('')
    //Add new task into task array
    const[tasks, setTasks] = useState([])
  
    function addTask() {
      setTasks([...tasks, newTask])
    }
//Create duplicate array in order to delete items - cannot manipulate original array
    function deleteTask(index) {
      var duplicateArray=[...tasks]
      
      duplicateArray.splice(index, 1)
      setTasks(duplicateArray)
    }
  
    //use map function to return HTML content from array
    const taskList = tasks.map((object, index)=>{
      
      return <div className='row justify-content-center'>
        
        <div className='col-md-4 text-left'>{index +1} {object}</div>
        <button onClick={()=>(deleteTask(index))} className='col-md-1 btn btn-danger m-1'>DELETE</button>
  
      </div>
    })
    
    return (
      <div className="todo-button"> 
        <input 
        className="input-text"
        type="text" 
        placeholder="Do laundry..."
        value={newTask}
        onChange={(e)=>{setNewTask(e.target.value)}}
        />

       <button onClick={addTask} className='add-button'>Add task</button>
       
       {taskList}
      
      </div>
     
    )
  }
  
  return (
        <div className="header">
          To Do List
          <TodoBar />
        </div>
    );
  }
  
export default App;
