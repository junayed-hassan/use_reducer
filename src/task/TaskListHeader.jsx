import { useContext } from "react";
import { TaskContext } from "../context";

function TaskListHeader() {
    const { dispatch } = useContext(TaskContext);

    const handleDeleteAll = () => {
        if (window.confirm("Are you sure you want to delete all tasks?")) {
            dispatch({ type:'DELETE_ALL' });
        }
    };

    return (
        <div className="flex justify-between p-3 items-center">
            <h1 className="text-3xl mb-3 font-semibold">Task List</h1>
            <button
                onClick={handleDeleteAll}
                aria-label="Delete All Tasks"
                className="block py-2 px-6 text-xl shadow-sm text-yellow-50 font-medium bg-rose-700"
            >
                Delete All
            </button>
        </div>
    );
}

export default TaskListHeader;
