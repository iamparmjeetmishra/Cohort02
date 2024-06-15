import { useState} from 'react'

export default function App() {

  const [ title, setTitle] = useState('my name is Parm')

  return (
    <div>
      <button>Update the title</button>
      <h2>{ title }</h2>
    </div>
  )
}
