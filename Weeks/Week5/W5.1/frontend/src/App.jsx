import { useEffect, useState} from 'react'
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

export default function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todos')
    .then(async (res) => {
      const json = await res.json()
      setTodos(json.todos)
    })
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl font-semibold py-4'>Todo App with backend</h2>
      <div className='flex gap-4'>
        <CreateTodo />
        <div className='flex flex-row gap-4'>
          <Todos todos={todos} />
        </div>
      </div>
    </div>
  )
}
