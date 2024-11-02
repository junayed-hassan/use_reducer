import TaskFrom from "./TaskFrom"
import TaskList from "./TaskList"

function TaskComponents() {    
  return (
    <div className="w-11/12 mx-auto flex gap-5 mt-5">
        <TaskFrom />
        <TaskList />
    </div>
  )
}

export default TaskComponents