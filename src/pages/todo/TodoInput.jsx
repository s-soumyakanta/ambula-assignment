import { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import {useTodoContext} from '../../contexts'


const TodoInput = () => {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodoContext()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo, completed: false})
    setTodo("")
  }
  return (
    <form onSubmit={add} className=" bg-blue-950 rounded-md w-full h-16 flex justify-center items-center ">
      <input 
          type="text"
          placeholder='Enter a todo' 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="h-3/5 w-2/5 rounded-l-md pl-3"
       />
      <button type='submit' className="px-4 bg-red-500 h-3/5 w-1/5 rounded-r-md text-white">Add <AddTaskIcon /></button>
    </form>
  )
}

export default TodoInput