import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Userthumb from "./Userthumb";
import axios from "axios";

export default function UserCard() {

   const [users, setUsers] = useState([])
   const [filter, setFilter] = useState('')

   useEffect(() => {
      axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter)
         .then(res => {
            setUsers(res.data.user)
         })
   }, [filter])

   return (
      <div className="flex items-center justify-between">
         {users.map(user => <User key={user} user={user} />)}
      </div>
   )
}

function User({ user }) {
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