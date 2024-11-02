/* eslint-disable react/prop-types */
import TaskFrom from "./TaskFrom"
import TaskList from "./TaskList"

function TaskComponents({task,onAddTask,onDeleteTask,onEditTask,editItems,upDataTask,allClearTask}) {    
  return (
    <div className="w-11/12 mx-auto flex gap-5 mt-5">
        <TaskFrom
        addTask={onAddTask}
        editTask={editItems}
        upDataTask={upDataTask}
        />
        <TaskList
        task={task}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        allClearTask={allClearTask}
        />
    </div>
  )
}

export default TaskComponents