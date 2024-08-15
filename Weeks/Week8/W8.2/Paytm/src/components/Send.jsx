import { useSearchParams } from "react-router-dom"
import Userthumb from "./Userthumb"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import axios from "axios"

export default function Send() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const firstName = searchParams.get('name')
  const firstNameThumb = firstName.split('')[0]
  const [amount, setAmount] = useState(0)
  
  const SendMoney = async() => {
    await axios.post('http://localhost:3000/api/v1/account/transfer', {
      to: id,
      amount
    }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    })
  }

  return (
    <div className="h-screen w-full bg-purple-50 flex flex-col items-center justify-center">
      <div className="border rounded shadow-md p-6">
        <h2 className="text-center text-2xl py-4 font-bold">Send Money</h2>
        <div className="flex items-center gap-2">
          <Userthumb name={firstNameThumb} />
          <h2 className="font-bold text-xl capitalize">
            {firstName}
          </h2>
        </div>
        <div className="mt-4 space-y-3">
          <p className="font-semibold text-xs">Amount(in Rs)</p>
          <Input
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            type='number'
            placeholder='Enter amount'
          />
          <Button onClick={SendMoney} className='w-full'>Initiate Transfer</Button>
        </div>
      </div>
    </div>
  )
}
