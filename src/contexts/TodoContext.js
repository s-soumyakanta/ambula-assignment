/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Take Medicine in noon",
        isDone:false
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleIsDone: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}