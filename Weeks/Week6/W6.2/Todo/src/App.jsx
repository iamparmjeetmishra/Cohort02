import { useEffect, useState} from 'react'
import CreateTodo from "./components/CreateTodo";
import axios from 'axios'
import Todo from './components/Todo'

export default function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos')
      .then((res) => {
      setTodos(res.data.todos )
    })
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl font-semibold py-4'>Todo App with backend</h2>
      <div className='flex flex-col items-center gap-6'>
        <CreateTodo />
        <div className='flex flex-row gap-4 '>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}
