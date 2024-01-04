import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {useTodoContext} from '../../contexts'


const AllTodo = () => {
    const {todos, deleteTodo, toggleIsDone} = useTodoContext()
   
  return (
    <>
   {
    todos.map((todo) => {
        return(
            <div key={todo.id} className="w-full bg-blue-950 text-white p-3 rounded-md">
            <div className="flex justify-between px-4">
            <div>
              <p className={` ${todo.isDone ? "line-through":""}`}>{todo.todo}</p>
            </div>
    
            <div className="flex justify-between space-x-4">
            <div className='cursor-pointer' onClick={()=>toggleIsDone(todo.id)}>
              {todo.isDone ? <CheckCircleIcon />: <RadioButtonUncheckedIcon />}
            </div>
    
            <div className='cursor-pointer' onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </div>
            </div>
            </div>
          </div>
        )
    })
   }
    </>
  )
}

export default AllTodo