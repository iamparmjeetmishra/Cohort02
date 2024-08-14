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
                  navigate('/signin')
               }} >
                  Sign In
               </button>
            <button onClick={() => {
                  navigate('/signup')
               }} >
                  Sign Up
               </button>
            <button onClick={() => {
                  navigate('/send')
               }} >
                  Send
               </button>
            <button onClick={() => {
                  navigate('/dashboard')
               }} >
                  Dashboard
               </button>
         </nav>
      </div>
   )
}
