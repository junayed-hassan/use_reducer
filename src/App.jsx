import { useState } from "react";
import TaskComponents from "./task/TaskComponents";
import { initialTasks } from "./TaskData/InitialTasks";
import { TaskContext } from "./context";

function App() {
  const [task, setTask] = useState(initialTasks);
  const [editTask, setEditTask] = useState(null);

  const providerValue = {
    task,
    setTask,
    editTask,
    setEditTask,
  };

  return (
    <TaskContext.Provider value={providerValue}>
      <TaskComponents />
    </TaskContext.Provider>
  );
}

export default App;
