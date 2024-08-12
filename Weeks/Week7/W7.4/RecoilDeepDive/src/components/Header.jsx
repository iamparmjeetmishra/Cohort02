import { useNavigate } from "react-router-dom"

export default function Header() {
   const navigate = useNavigate()
   return (
      <div className="p-4 flex gap-2 justify-between bg-zinc-200">
         <div className="font-semibold">Logo</div>
         <nav className="flex gap-2 font-medium">
            <button onClick={() => {
                  navigate('/')
               }} >
                  Home
            </button>
            <button onClick={() => {
                  navigate('/dashboard')
               }} >
                  Dashboard
               </button>
            <button onClick={() => {
                  navigate('/recoil')
               }} >
                  Recoil
               </button>
            <button onClick={() => {
                  navigate('/recoilV1')
               }} >
                  RecoilV1
               </button>
            <button onClick={() => {
                  navigate('/recoilasync')
               }} >
                  Recoil Async
               </button>
            <button onClick={() => {
                  navigate('/recoiltodo')
               }} >
                  Recoil Todo
               </button>
            <button onClick={() => {
                  navigate('/recoiltodoselector')
               }} >
                  Recoil Todo Selector
               </button>
         </nav>
      </div>
   )
}
