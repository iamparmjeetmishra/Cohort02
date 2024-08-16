// import {Label} from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'


import { toast } from 'sonner'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'



export default function Signup() {
  return (
    <div className="container flex items-center justify-center h-screen p-4 bg-gray-400">
      <SignUpForm />
    </div>
  )
}

const userSchema = z.object({
  username: z.string().email({ message: 'Please enter your email' }),
  password: z.string().min(5, 'Please enter strong password'),
  firstName: z.string().min(2, 'first name must be 2 characters long'),
  lastName: z.string()
})



function SignUpForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    password: ''
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: zodResolver(userSchema) })



  const submitHandler = async (data) => {
    console.log('here')
    setFormData(data)

    try {
      if (data) {

        const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password
        });
        console.log(response)
        localStorage.setItem('token', response.data.token)
        navigate('/dashboard')

        // console.log('signup', data)
        toast('Email Sent.', {
          description: (response.status === 200) && 'Successful signed up',
        })
        reset()
        return
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`)
      console.log('err', error.response?.status === 411 ? error.response.data.message : error)
    }


  }


    return (
      <section className="w-1/4 p-4 border rounded bg-white text-black">
        <div className='text-center'>
          <h1 className="font-bold text-2xl">Sign Up</h1>
          <p className="text-gray-500">Enter your information to create an account</p>
        </div>
        {/* <Label>First Name</Label> */}
        <div className=''>
          <form className='space-y-4' onSubmit={handleSubmit(submitHandler)}>
            <div>
              <Label className='text-md' htmlFor='firstName'>First Name</Label>
              <Input
                {...register('firstName')}
                id='firstName'
                placeholder='John'
              />
              {errors?.firstName && (
                <span className="text-red-600 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input
                {...register('lastName')}
                id='lastName'
                placeholder='Joe'
              />
              {errors?.lastName && (
                <span className="text-red-600 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                {...register('username')}
                id='username'
                type='email'
                placeholder='Joe@gmail.com'
              />
              {errors?.username && (
                <span className="text-red-600 text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor='password'>Password</Label>
              <Input
                {...register('password')}
                id='password'
                type='password'
                placeholder='password'
              />
              {errors?.password && (
                <span className="text-red-600 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <Button
              type='submit'
              className='w-full'
            // disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up' : 'Sign Up'}
            </Button>
          </form>
          <p className='text-center text-sm'>Already have an account? <Link className='underline' to='/signin'>Login</Link></p>
        </div>
        {/* {JSON.stringify(formData)} */}

      </section>
    )
  }