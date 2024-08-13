import { atomFamily } from "recoil";
import {TODOS} from '../../lib/todos'

// Todos Family

export const todosAtomFamily = atomFamily({
   key: 'todosAtomFamily',
   default: id => {
      return TODOS.find(todo => todo.id === id)
   }
})