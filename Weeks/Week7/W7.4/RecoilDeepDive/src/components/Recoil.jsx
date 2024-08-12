import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import {countAtom, evenSelector} from '../store/atoms/count'


export default function Prop() {

   return (
      <div className="p-4 text-center flex flex-col justify-center items-center ">
         <RecoilRoot>
            <Count />
         </RecoilRoot>
      </div>
   )
}


function Count() {
   return <div className="text-2xl font-semibold mb-2">
      <CountRenderer />
      <Buttons />
   </div>
}

function CountRenderer() {
   const count = useRecoilValue(countAtom)
   return <div>
      {console.log('Count', count)}
      {count}
      <EvenCountRender />
   </div>
}

function EvenCountRender() {
   const isEven = useRecoilValue(evenSelector)

   return <div>
      {isEven ? 'odd' : 'even'}
   </div>
}

// function CountRenderer() {
//    const count = useRecoilValue(countAtom)
//    return <div>
//       {console.log('Count', count)}
//       {count}
//       <span className='block text-sm mb-2' >{isEvenFunc(count)}</span>
//    </div>
// }

// function isEvenFunc(num) {
//    if (num % 2 === 0) {
//       return 'It is Even'
//    } else return 'Odd Num'
// }


function Buttons() {
   // const [count, setCount] = useRecoilState(countAtom)
   const setCount = useSetRecoilState(countAtom)
   console.log('Btn render')
   return <div className="flex gap-2">
      <button
         className="bg-zinc-300 text-sm font-normal py-1 px-2 rounded hover:bg-zinc-800 hover:text-white"
         onClick={() => setCount(count => count + 1)}>
         Increse
      </button>
      <button
         className="bg-zinc-300 text-sm font-normal py-1 px-2 rounded hover:bg-zinc-800 hover:text-white"
         onClick={() => setCount(count => count - 1)}>
         Decrease
      </button>
   </div>
}


// Btn renders every time

// function Buttons() {
//    const [count, setCount] = useRecoilState(countAtom)
//    console.log('Btn render')
//    return <div className="flex gap-2">
//       <button className="bg-zinc-300 text-sm font-normal py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count + 1)}>Increse</button>
//       <button className="bg-zinc-300 text-sm font-normal py-1 px-2 rounded hover:bg-zinc-800 hover:text-white" onClick={() => setCount(count - 1)}>Decrease</button>
//    </div>
// }