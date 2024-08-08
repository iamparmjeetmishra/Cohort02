import {createContext, useContext, useState } from "react"

const CountContext = createContext(null)


export default function Prop() {
   const [count, setCount] = useState(0)

   return (
      <div className="p-4 flex flex-col justify-center items-center ">
         <CountContext.Provider value={{count, setCount}} >
            {count}
            <Buttons />
         </CountContext.Provider>
      </div>
   )
}


function Buttons() {
   const {count, setCount} = useContext(CountContext)
   return <div className="flex gap-2">
      <button className="bg-zinc-300 py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count + 1)}>Increse</button>
      <button className="bg-zinc-300 py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count - 1)}>Decrease</button>
   </div>
}



// import { createContext, useContext, useState } from "react"

// export const CountContext = createContext(0)

// export default function Prop() {
//    const [count, setCount] = useState(0)

//    return (
//       <div className="p-4 flex flex-col justify-center items-center ">
//          <CountContext.Provider value={count}>
//             <Count setCount={setCount} />
//          </CountContext.Provider>
//       </div>
//    )
// }


// function Count({setCount}) {
//    return <div className="mb-2">
//       <CountRenderer />
//       <Buttons  setCount={setCount} />
//    </div>
// }

// function CountRenderer() {
//    const count = useContext({ CountContext })
//    return <div>
//       {count}
//    </div>
// }


// function Buttons({ setCount }) {
//    const count = useContext({CountContext})
//    return <div className="flex gap-2">
//       <button className="bg-zinc-300 py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count + 1)}>Increse</button>
//       <button className="bg-zinc-300 py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count - 1)}>Decrease</button>
//    </div>
// }