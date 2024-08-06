
export default function CreateTodo() {
   return (
      <div className='flex flex-col gap-2 items-start border p-4 rounded'>
         <input
            type='text'
            placeholder='title'
            className='border-2 rounded'
            /> 
         <input
            type='text'
            placeholder='desc'
            className='border-2 rounded'
         />
         <button className='py-1 px-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-400'>Add todo</button>
      </div>
   )
}
