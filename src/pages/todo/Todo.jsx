import { useState } from 'react';
import TodoInput from './TodoInput.jsx';
import {TodoContextProvider} from "../../contexts/index.js"
import AllTodo from './AllTodo.jsx';
import TodoStat from './TodoStat.jsx';


const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleIsDone = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        isDone: !prevTodo.isDone } : prevTodo))
  }
  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, toggleIsDone}}>
    <div className="min-h-screen max-w-5xl p-2 mx-auto flex flex-col items-center space-y-8">
      <div className='w-full space-y-4'>
        <TodoInput />
        <TodoStat />
      </div>

      <div className='w-full space-y-3'>
        <AllTodo />
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default Todo