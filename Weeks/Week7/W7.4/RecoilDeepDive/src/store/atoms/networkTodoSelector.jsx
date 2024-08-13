import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios'

// Todos Fam

export const todosAtomFamily = atomFamily({
   key: 'todosAtomFamily',
   default: selectorFamily({
      key: 'todoSelectorFamily',
      get: (id) => async () => {
         await new Promise(r => setTimeout(r, 2000))
         const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
         return res.data.todo
      }
   })
})