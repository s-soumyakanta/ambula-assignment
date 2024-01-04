import TodoInput from './TodoInput.jsx';
import AllTodo from './AllTodo.jsx';
import TodoStat from './TodoStat.jsx';


const Todo = () => {
 
  return (
    <div className="min-h-screen max-w-5xl p-2 mx-auto flex flex-col items-center space-y-8">
      <div className='w-full space-y-4'>
        <TodoInput />
        <TodoStat />
      </div>

      <div className='w-full space-y-3'>
        <AllTodo />
      </div>
    </div>
  )
}

export default Todo