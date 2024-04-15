import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { useSelector } from 'react-redux'
export const DashboardProfile = () => {
    const {currentUser}=useSelector((state)=>state.user);
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='py-7 text-center  text-3xl font-semibold'>Profile</h1>
        <form className='flex flex-col gap-4'>

        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
        <img src={currentUser.profilePicture} alt='Profile Picture' className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' />

        </div>
        <TextInput type='text'id='username' defaultValue={currentUser.username} placeholder='username'/> 
        <TextInput type='email'id='email' defaultValue={currentUser.email} placeholder='email'/> 
        <TextInput type='password'id='password' placeholder='password'/> 
        <Button type='submit' gradientDuoTone='greenToBlue' outline >Update</Button>
        <div className='flex justify-between mt-5'> 
            <span className='text-red-500 cursor-pointer'>Delete Account</span>
            <span className='text-red-500 cursor-pointer'>Sign Out</span>
        </div>



        
        </form>
    </div>
  )
}
