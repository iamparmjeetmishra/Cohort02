import { useState } from "react"

export default function Prop() {
   const [count, setCount] = useState(0)

  return (
     <div className="p-4 flex flex-col justify-center items-center ">
        <Count count={count} />
   <Buttons count={count} setCount={setCount} />
    </div>
  )
}


function Count({ count }) {
   return <div className="text-2xl font-semibold mb-2">
      {count}
   </div>
}

function Buttons({ count, setCount }) {
   return <div className="flex gap-2">
      <button className="bg-zinc-300 py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count + 1)}>Increse</button>
      <button className="bg-zinc-300 py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count - 1)}>Decrease</button>
   </div>
}