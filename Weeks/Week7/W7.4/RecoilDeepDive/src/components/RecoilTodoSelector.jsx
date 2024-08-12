import PropTypes from 'prop-types'
// import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil'
import { todosAtomFamily } from '../store/atoms/networkTodoSelector'

export default function RecoilTodoSelector() {
   return (
      <div className="flex flex-col gap-2 items-center justify-center">
         <h2 className="p-4 underline text-2xl font-semibold">Advanced Recoil Todo Selector</h2>
         <RecoilRoot>
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={3} />
         </RecoilRoot>
      </div>
   )
}

function Todo({ id }) {
   // const [todo] = useRecoilState(todosAtomFamily(id))
   const [todo] = useRecoilStateLoadable(todosAtomFamily(id))

   console.log(todo.state)

   if (todo.state === 'loading') {
      return <div>
         Loading.....
      </div>
   } else if(todo.state === 'hasValue') {
      return (
         <>
         <div className="flex flex-col gap-2 border p-4">
               <div className='font-semibold'>{todo.contents.title }</div>
               <div>{todo.contents.description }</div>
         </div>
         </>
      )
   } else {
      return <div>Error...</div>
   }

}



// function Todo({ id }) {
//    const [todo] = useRecoilState(todosAtomFamily(id))

//    return (
//       <>
//       <div className="flex flex-col gap-2 border p-4">
//             <div className='font-semibold'>{todo.title }</div>
//             <div>{todo.description }</div>
//       </div>
//       </>
//    )
// }

Todo.propTypes = {
   id: PropTypes.number.isRequired
}