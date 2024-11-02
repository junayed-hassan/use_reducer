/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

function TaskFrom({addTask,editTask,upDataTask}) {    
    const [text,setText] = useState('');        
    useEffect(() =>{
        if (editTask) {
            setText(editTask.text);
        }
    },[editTask])

    const textHandler = () => {
        if (editTask) {
            upDataTask({
                ...editTask,
                text,
            })
        } else {
            addTask({
            id:crypto.randomUUID(),
            text,
        })
        }
        
        setText('')
    }
  return (
    <div className="w-4/12 bg-gray-100 p-3 shadow-sm rounded-md">
        <h1 className="text-3xl mb-3 font-semibold">Task Form</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type hear" className="py-2 mb-3 px-5 w-full shadow-sm" type="text" />
        <button onClick={textHandler} className="block py-2 px-5 text-xl shadow-sm text-yellow-50 font-medium bg-green-700">{editTask ? 'Edit Task' : 'Add Task'}</button>
    </div>
  )
}

export default TaskFrom