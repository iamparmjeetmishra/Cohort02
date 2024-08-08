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
                  navigate('/prop')
               }} >
                  Prop
               </button>
            <button onClick={() => {
                  navigate('/context')
               }} >
                  Context
               </button>
         </nav>
      </div>
   )
}
