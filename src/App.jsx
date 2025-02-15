import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [tasks, setTasks] = useState([])
  const [taskInput, setTaskInput] = useState("")

  function getAllTask(){
    let token = localStorage.getItem("token")
    const headers = {
      "Authorization": `Bearer ${token}`
    }

    axios.get("https://e50-express-hosting.onrender.com/task", {headers: headers})
    .then(res => {
      console.log(res.data)
      setTasks(res.data)
    })
  }

  useEffect(()=>{
    getAllTask()
  }, [])

  const deleteTask = (id) => {
    axios.delete(`https://e50-express-hosting.onrender.com/task/delete-task/${id}`)
    .then(res => {
      getAllTask()
    })
  }

  const submitHandler = () => {
    let token = localStorage.getItem("token")
    const headers = {
      "Authorization": `Bearer ${token}`
    }
    axios.post("https://e50-express-hosting.onrender.com/task/newTask", {newTask: taskInput}, {headers})
    .then(()=>{
      getAllTask()
    })
  }

  const updateTask = (id) => {
    axios.put(`https://e50-express-hosting.onrender.com/task/edit-task/${id}`, {updatedTitle: taskInput})
    .then(()=>{
      getAllTask()
    })
  }

  return (
    <>
      <h1>Task list</h1>
      <form onSubmit={submitHandler}>
        <input type = "text" placeholder="Task" value={taskInput} onChange = {(e)=>setTaskInput(e.target.value)}/>
        <input type="submit" value="Add task" />
      </form>
      {tasks.map((task, index) => {
        return(
    
          <p key = {task._id}>
            {task.title} - {task._id}
            <button onClick = {()=>deleteTask(task._id)}>Delete</button>
            <button onClick = {()=>updateTask(task._id)}>Update</button>
          </p>
        )
      })}
    </>
  )
}

export default App
