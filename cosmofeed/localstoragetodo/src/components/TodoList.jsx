import React, { useEffect, useState } from 'react'

const TodoList = () => {
    const [tasks , setTasks] = useState([]);
    const [input , setInput] = useState('');
  
    useEffect(()=>{
      const localSTasks = localStorage.getItem("tasks");
      if(localSTasks){
        setTasks(JSON.parse(localSTasks))
      }
    },[])

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])


    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    const handleClick = () =>{
        setTasks([...tasks, input]);
        setInput("");
    }

    const handleDelete = (i) =>{
        const newtasks = [...tasks];
        newtasks.splice(i,1);
        setTasks(newtasks)
    }

  return (
    <div>
        <input type="text"
         value={input}
         onChange={handleChange}
         placeholder='enter your task here'
        />
        <button onClick={handleClick}>
            Add
        </button>
        <div>
            {
                tasks.map((el,i)=>(
                    <div>
                    <h4>{el}</h4>
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default TodoList
