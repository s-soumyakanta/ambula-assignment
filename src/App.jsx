import { useState } from "react"
import { Outlet } from "react-router-dom"
import {Navbar,Footer} from './components/index'
import { TodoContextProvider } from "./contexts"
import { CartContextProvider } from "./contexts"



//used App component used as a layout component for the application
const App = () => {
  const [todos, setTodos] = useState([])
  const [items,setItems] = useState([])



  //All todo context functionality
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


  //All cart context functionality
  
  const removeItems = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
   }
  const addItems = (item) => {
    setItems((prev) => [{...item}, ...prev] )
  }




  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, toggleIsDone}}>
     <CartContextProvider value={{items,addItems,removeItems}}>
    
    <div>
      <div className="my-36">
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
    </CartContextProvider>
    </TodoContextProvider>
  )
}

export default App