import React from 'react'
import { FaLaravel } from 'react-icons/fa'
import { Form, Link } from 'react-router-dom'
import {Button,FloatingLabel,Label, TextInput} from 'flowbite-react'

export const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
    <div className=' p-3  max-w-3xl mx-auto flex flex-col md:flex-row gap-5 md:items-center'>
      {/* leftDiv */}
      <div className='flex-1'>
         <Link to="/" className=' text-3xl  font-bold dark:text-white' >
            <span>
                <span className='px-2 py-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semiBold   text-center me-2 mb-2 rounded-lg text-white'>Virtual</span>Verse
            </span>
        </Link>
        <p className='mt-5 text-sm'>
          Welcome to Virtual Verse. You can sign up with your email and password or with Google
        </p>

      </div>
      {/* rightDiv */}
      <div className=' flex-1'>
        <form className='flex flex-col gap-5'>
          <div>
            <Label value='Your username' />
            
            <TextInput type='text' placeholder='Username' id='username'>
            </TextInput>
          </div>
          <div>
            <Label value='Your email' />
            
            <TextInput type='text' placeholder='name@company.com' id='email'>
            </TextInput>
          </div>
          <div>
            <Label value='Your password' />
            
            <TextInput type='text' placeholder='Password' id='password'>
            </TextInput>
          </div>
          <Button type='submit' gradientDuoTone='purpleToBlue'>
            Sign Up

          </Button>

        </form>
        <div className='text-sm mt-5 flex flex-row gap-2'>
          <span> Have an account ?</span>
          
            <Link to='/sing-in' className='text-blue-500' >
              Sign in 
            </Link>

        </div>

        

      </div>


      </div>
      </div>
  )
}
