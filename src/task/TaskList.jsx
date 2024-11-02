import { useContext } from "react"
import TaskListHeader from "./TaskListHeader"
import TaskListItems from "./TaskListItems"
import { TaskContext } from "../context"

function TaskList() {  

  const {task} = useContext(TaskContext);

  return (
    <div className="bg-gray-100 shadow-sm rounded-sm w-8/12">
    <TaskListHeader />
    <ul className="p-3">
        {task.map(item => (
            <TaskListItems
                key={item.id}
                tas={item}
            />
        ))}
    </ul>
</div>

  )
}

export default TaskList