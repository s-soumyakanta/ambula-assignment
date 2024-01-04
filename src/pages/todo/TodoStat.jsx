import { useTodoContext } from "../../contexts";
const TodoStat = () => {
    const { todos } = useTodoContext()
  
    // Calculate completed and total todos
    const completedTodos = todos.filter(todo => todo.isDone);
    const totalTodos = todos.length;
  
    return (
      <>
       {
        todos.length ? <div className="w-full justify-evenly flex bg-blue-950 p-2 rounded-md text-white">
        <p className="p-2 bg-red-500 rounded-md">Completed Todos: {completedTodos.length}</p>
        <p className="p-2 bg-red-500 rounded-md">Total Todos: {totalTodos}</p>
      </div>:""
       }
      </>
    );
  };
  
  export default TodoStat;
  