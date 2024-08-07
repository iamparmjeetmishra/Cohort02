

export default function Todos({todo}) {
   return <>
         <div key={todo.id} className='border-2 border-sky-400 p-4 rounded'>
            <h1 className='text-md font-semibold'>{ todo.title }</h1>
            <h2 className='text-sm font-medium'>{todo.description}</h2>
            <button className='text-sm bg-slate-300 py-1 px-1 rounded hover:bg-black hover:text-white mt-2'>{todo.completed === true ? 'Completed' : 'Mark as completed'}</button>
         </div>
   </>
}
