/* eslint-disable react/prop-types */

function TaskListItems({task,onDeleteTask,onEditTask}) {
    const DeleteHandler = () => {
        let isConfirm = confirm('Are you sure to delete this item')
        if(isConfirm) {
            onDeleteTask(task.id)
        }
    }
  return (
    <>
        <li className="flex p-2 bg-white items-center shadow-sm mb-3">
            <span className="text-xl font-medium px-3">#</span>
            <p className="w-full text-xl font-semibold">{task.text}</p>
            <button onClick={() => onEditTask(task)} className="block py-2 px-6 text-md shadow-sm text-yellow-50 font-medium bg-green-700 me-3">Edit</button>
            <button onClick={DeleteHandler} className="block py-2 px-6 text-md shadow-sm text-yellow-50 font-medium bg-rose-700">Delete</button>
        </li>
    </>
  )
}

export default TaskListItems;