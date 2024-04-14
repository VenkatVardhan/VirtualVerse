import React from 'react'
import {Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar,  TextInput} from 'flowbite-react'
import { Link,useAsyncValue,useLocation } from 'react-router-dom'
import {AiOutlineSearch} from'react-icons/ai'
import { Button } from 'flowbite-react'
import {FaMoon,FaSun} from 'react-icons/fa'
import { MdLightMode } from "react-icons/md";

import { useSelector,useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'




export const Header = () => {
  const path=useLocation().pathname;
  const dispatch=useDispatch();
  const {currentUser}=useSelector((state)=>state.user);
  const {theme}=useSelector(state=>state.theme);
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white' >
            <span>
                <span className='px-2 py-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semiBold   text-center me-2 mb-2 rounded-lg text-white'>Virtual</span>Verse
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
      <Button className='w-12 h-10 hidden  sm:inline justify-center items-center'color='gray' pill onClick={()=>dispatch(toggleTheme())}>
          
          {theme==='light'?<FaMoon />:<MdLightMode/>}

      </Button>
      {
        currentUser?(
          <Dropdown arrowIcon={false} inline label={<Avatar alt='user'img={currentUser.profilePicture} rounded/>}>
            <DropdownHeader>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-md font-medium truncate'>{currentUser.email}</span>
            </DropdownHeader>
            <DropdownItem>
              <Link to='/dashboard?tab=profile'>
                profile
              </Link>
            </DropdownItem>
            <DropdownDivider/>
             <DropdownItem>
              
                Sign Out
              
            </DropdownItem>
            
          </Dropdown>
        ):(  <Link to='/sign-in'>
      <Button gradientDuoTone='purpleToBlue' outline >
        Sign In
      </Button>
      </Link>)
      }
    
      <Navbar.Toggle/>
       </div>
       <Navbar.Collapse>
        <Navbar.Link active={path==='/'} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/about'}as={'div'}>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        
        <Navbar.Link active={path==='/projects'}as={'div'}>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>

       </Navbar.Collapse>
        
    </Navbar>
    
  )
}
