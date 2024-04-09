import React from 'react'
import {Navbar,  TextInput} from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom'
import {AiOutlineSearch} from'react-icons/ai'
import { Button } from 'flowbite-react'
import {FaMoon} from 'react-icons/fa'




export const Header = () => {
  const path=useLocation().pathname
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white' >
            <span>
                <span className='px-2 py-1 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 rounded-lg text-white'>Virtual</span>Verse
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
       <Button className='lg:hidden w-12 h-10 'color='gray' pill>
        <AiOutlineSearch/>
       </Button>
       <div className='flex gap-2 md:order-2'>
      <Button className='w-12 h-10 hidden sm:inline'color='gray' pill>
          <FaMoon/>

      </Button>
      <Link to='/sign-in'>
      <Button gradientDuoTone='cyanToBlue' >
        Sign In
      </Button>
      </Link>
      <Navbar.Toggle/>
       </div>
       <Navbar.Collapse>
        <Navbar.Link active={path==='/'} as={div}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/about'}as={div}>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/projects'}as={div}>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>

       </Navbar.Collapse>
        
    </Navbar>
    
  )
}
