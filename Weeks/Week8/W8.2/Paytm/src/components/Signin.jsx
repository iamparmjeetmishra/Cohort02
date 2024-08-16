// import {Label} from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export default function Signin() {
  return (
    <div className="container flex items-center justify-center h-screen p-4 bg-gray-400">
      <SigninForm />
    </div>
  )
}

function SigninForm() {
  return (
    <section className="w-1/4 p-4 border rounded bg-white text-black">
      <div className='text-center'>
        <h1 className="font-bold text-2xl">Sign In</h1>
        <p className="text-gray-500">Enter your credentials to access your account</p>
      </div>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' placeholder='Joe@gmail.com' />
        <Label htmlFor='password'>Password</Label>
        <Input id='password' type='password' placeholder='password' />
        <Button>Sign In</Button>
        <p className='text-center text-sm'>Don&apos;t have an account? <Link className='underline' to='/signup'>Sign Up</Link></p>
      </div>
    </section>
  )
}