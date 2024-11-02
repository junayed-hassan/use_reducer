import { useState } from "react"
import TaskComponents from "./task/TaskComponents"
import { initialTasks } from "./TaskData/InitialTasks"

function App() {
  const [task,setTask] = useState(initialTasks());
  const [editTask,setEditTask] = useState(null)
    
  const AddTaskHandler = (item) => {
    setTask([
      ...task,
      item
  ])   
  }  
  const DeleteTaskHandler = (id) => {
    setTask(task.filter(task => task.id !== id));
  }
  const EditTaskHandler = (t) => {
    setEditTask(t);
  }
  const upDataTask = (upDataTask) => {
    setTask(task.map(item => {
      if (item.id === upDataTask.id) {
        return upDataTask;
      } else {
        return item; 
      }
    }));
  };
  const allClearTask = () => {
    setTask([])
  }
  return (
    <>
      <TaskComponents
      onAddTask={AddTaskHandler}
      task={task}
      onDeleteTask={DeleteTaskHandler}
      onEditTask={EditTaskHandler}
      editItems={editTask}
      upDataTask={upDataTask}
      allClearTask={allClearTask}
      />
    </>
  )
}

export default App