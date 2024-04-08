import React from 'react'
import {Navbar, TextInput} from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from'react-icons/ai'



export const Header = () => {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white' >
            <span>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-50 rounded-lg text-white'>Virtual</span>Verse
            </span>
        </Link>
       <form >
        <TextInput
        type ="text"
        placeholder='Search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        
        />
       </form>
        
    </Navbar>
    
  )
}
