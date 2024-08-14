import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import UserCard from "./UserCard";
import Userthumb from "./Userthumb";
import { Balance } from "./BalanceCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
   const [users, setUsers] = useState([])
   const [filter, setFilter] = useState('')
   const [balance, setBalance] = useState(0)

   useEffect(() => {
      axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter)
         .then(res => {
            setUsers(res.data.user)
         })
   }, [filter])

   useEffect(() => {
      balanceFetch()
      console.log('render effect')
   }, [balance])

   const balanceFetch = async () => {
      let res = await axios.get('http://localhost:3000/api/v1/account/balance', {
         headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
         }
      })
      console.log(res.data.balance)
      setBalance(res.data.balance)
   }
   

   return (
      <div className='py-4 container space-y-2'>
         <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <span className="flex gap-2">
               <p>Hello, User { }</p>


            </span>
         </div>
         <Separator />
         <h3 className="font-medium text-lg">Your Balance: ${balance}</h3>
         <Button variant='outline' onClick={balanceFetch} >Get Balance</Button>
         <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">Users</h2>
            <Input
               onChange={(e) => {
                  setFilter(e.target.value)
               }}
               id='userFilter'
               placeholder="Search Users"
            />
            {/* <UserCard  /> */}
            {users.map(user => <User key={user} user={user} />)}
         </div>
      </div>
   )
}


function User({ user }) {
   const navigate = useNavigate()
   return <div className="flex items-center justify-between gap-2 w-full">
      <div className="flex">
         <Userthumb name={user.firstName[0]} />
         <div className="flex flex-col justify-center h-ful">
            {user.firstName} {user.lastName}
         </div>
      </div>
      <Button onClick={(e) => {
         navigate("/send?id=" + user._id + "&name=" + user.firstName);
      }} label={"Send Money"}>Send Money</Button>
   </div>
}