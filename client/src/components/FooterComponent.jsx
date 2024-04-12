import { Footer} from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs'

export const FooterComponent = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full w-max-7xl mx-auto '>
      <div className='w-full justify-between grid sm:flex md:grid-col-1'>
        <div className=''>
           <Link to="/" className='self-center text-lg sm:text-xl whitespace-nowrap font-semibold dark:text-white' >
            <span>
                <span className='px-2 py-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semiBold   text-center me-2 mb-2 rounded-lg text-white'>Virtual</span>Verse
            </span>
        </Link>  
        </div>
        
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 mt-4'>
          <div>
          <Footer.Title title='about'/>
          <Footer.LinkGroup col>
            <Footer.Link
              href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                

            </Footer.Link>
            <Footer.Link
              href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                Google

            </Footer.Link>
          </Footer.LinkGroup >
          </div>
        
        <div>
          <Footer.Title title='Follow us'/>
          <Footer.LinkGroup col>
            <Footer.Link
              href='https://www.linkedin.com/in/sai-venkat-vardhan-burle-022269256/' target='_blank' rel='noopener noreferrer'>
                Linkedin

            </Footer.Link>
            <Footer.Link
              href='https://github.com/VenkatVardhan/' target='_blank' rel='noopener noreferrer'>
                Github

            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
           <Footer.Title title='Legal'/>
          <Footer.LinkGroup col>
            <Footer.Link
              href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                privacy policy

            </Footer.Link>
            <Footer.Link
              href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                Terms &amp; Conditions

            </Footer.Link>
          </Footer.LinkGroup>
        
        </div>
    </div>
    </div>
    <Footer.Divider/>
    <div className='w-full sm:flex sm:items-center sm:justify-between '>
      <Footer.Copyright href="#" by='Virtual Verse' year={new Date().getFullYear()} />
      <div className='flex gap-6 mt-0 sm:mt-4 sm:justify-center'>
        <Footer.Icon href='#' icon={BsFacebook}/>
          <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsGithub}/>
              <Footer.Icon href='#' icon={BsLinkedin}/>

      </div>
    </div>
    </div>
    </Footer>
  )
}
