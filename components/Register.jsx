"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {useState} from 'react'

const Register = () => {

  const router = useRouter()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!username || !email || !password) {
      setError("All fields are necessary!")
      return;
    }

    try {
      const resUserExists = await fetch('api/userExist', {
        method: 'POST',
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({
          email
        })
      })

      const {user} = await resUserExists.json()

      if(user){
        setError("User already exists!")
        return;
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({
          username, email, password
        })
      })

      if(res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login")
      }else{
        console.log('User registration failed!')
      }
    } catch (error) {
      console.log('Error during registration!', error)
    }
  }


  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
      <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900">Username</span>
          <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 " placeholder="username" required 
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900">Your email</span>
          <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 " placeholder="name@gmail.com" required 
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900 ">Your password</span>
          <input type="password"className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 " required 
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <div className='text-red-500 text-sm font-semibold my-2'>{error}</div>
          )}
        {/* <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900">Repeat password</span>
          <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" required />
        </div> */}
        <div className="flex items-center justify-center mb-6">
          <span className="ml-2 text-sm font-medium text-gray-900 ">Already have an account? <Link href="/login" className="text-lime-600 hover:underline dark:text-lime-500">Login</Link></span>
        </div> 
        <div className='flex justify-center items-center'>
          <button type="submit" className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
        </div>
      </form>

    </div>
  )
}

export default Register