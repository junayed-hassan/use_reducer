import { createContext } from "react";

const TaskContext = createContext({
    task:[],
    setTask:() => {},
    editTask:{},
    setEditTask:() => {},
});

export {TaskContext};