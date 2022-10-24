import './App.css';
import './index.css';
import {useState} from 'react';
import {Task} from './Task';



function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const storeNewTask =(e)=>{
    
    let form =document.querySelector('#todoList');
    form.firstElementChild.value = "";
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task])
  }

  const deleteTask =(id)=>{
    let newTodoList = todoList.filter((task)=>{
      return task.id !== id
    })
    setTodoList(newTodoList)
  }

  const taskStatus = (id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id === id){
          return {...task, completed: true};
        }else{
          return task;
        }
      })
    )
  }

  return(
    <div className="app" style={{textAlign: 'center'}}>
      <h1>My TO DO LIST</h1>
      <div id="todoList">
      <input name="taskBar" onChange={(e)=>{setNewTask(e.target.value)}}/>
      <input type="submit" onClick={storeNewTask}/>
      </div>
      <div>
        {todoList.map((oneTask, key)=>{
          return <Task key={key} taskName={oneTask.taskName} id={oneTask.id} deleteTask={deleteTask} taskStatus = {taskStatus} completed={oneTask.completed}/>
        })}
        
      </div>
    </div>
  );
}





export default App;
