/* eslint-disable react/prop-types */
import TaskListHeader from "./TaskListHeader"
import TaskListItems from "./TaskListItems"

function TaskList({task,onDeleteTask,onEditTask,allClearTask}) {    
  return (
    <div className="bg-gray-100 shadow-sm rounded-sm w-8/12">
    <TaskListHeader allClearTask={allClearTask} />
    <ul className="p-3">
        {task.map(item => (
            <TaskListItems
                key={item.id}
                task={item}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
            />
        ))}
    </ul>
</div>

  )
}

export default TaskList