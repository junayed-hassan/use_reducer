import { useReducer, useState } from "react";
import TaskComponents from "./task/TaskComponents";
import { initialTasks } from "./TaskData/InitialTasks";
import { TaskContext } from "./context";
import tasksReducer from "./reducer/TaskRdeucer";

function App() {

  const [editTask, setEditTask] = useState(null);
  const [task, dispatch] = useReducer(tasksReducer, initialTasks);

  const providerValue = {
    task,
    dispatch,
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
