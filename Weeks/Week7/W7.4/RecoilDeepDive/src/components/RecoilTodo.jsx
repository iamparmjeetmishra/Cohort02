import PropTypes from 'prop-types'
import { RecoilRoot, useRecoilState } from 'recoil'
import { todosAtomFamily } from '../store/atoms/networkTodo'

export default function RecoilTodo() {
   return (
      <div className="flex flex-col gap-2 items-center justify-center">
         <h2 className="p-4 underline text-2xl font-semibold">Advanced Recoil Todo</h2>
         <RecoilRoot>
            <Todo id={1} />
            <Todo id={2} />
         </RecoilRoot>
      </div>
   )
}


function Todo({ id }) {
   const [todo] = useRecoilState(todosAtomFamily(id))

   return (
      <>
      <div className="flex flex-col gap-2 border p-4">
            <div className='font-semibold'>{todo.title }</div>
            <div>{todo.description }</div>
      </div>
      </>
   )
}

Todo.propTypes = {
   id: PropTypes.number.isRequired
}