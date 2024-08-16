
export default function Userthumb({ name }) {
   let nameCapt = name.toUpperCase()
   return (
      <div className='border rounded-full bg-gray-300 size-8 flex items-center justify-center p-4'>
         {nameCapt}
      </div>
   )
}