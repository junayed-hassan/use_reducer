/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../context";

function TaskListItems({ tas }) {
    const { task, setTask, setEditTask } = useContext(TaskContext);

    const DeleteHandler = () => {
        const isConfirm = window.confirm("Are you sure you want to delete this item?");
        if (isConfirm) {
            setTask(task.filter((t) => t.id !== tas.id));
        }
    };

    return (
        <li className="flex p-2 bg-white items-center shadow-sm mb-3">
            <span className="text-xl font-medium px-3">#</span>
            <p className="w-full text-xl font-semibold">{tas.text}</p>
            <button
                onClick={() => setEditTask(tas)}
                className="block py-2 px-6 text-md shadow-sm text-yellow-50 font-medium bg-green-700 me-3"
            >
                Edit
            </button>
            <button
                onClick={DeleteHandler}
                className="block py-2 px-6 text-md shadow-sm text-yellow-50 font-medium bg-rose-700"
            >
                Delete
            </button>
        </li>
    );
}

export default TaskListItems;
