import React, { useState } from 'react'

import { Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import {Alert, Button,Label, Spinner, TextInput} from 'flowbite-react'

import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js'
import { OAuth } from '../components/OAuth.jsx'




export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const [formData,setFormData]=useState({});
  const{loading,error:errorMessage}=useSelector((state)=>state.user);
  


  const handleChange = (e)=>{
    
    setFormData({...formData,[e.target.id]:e.target.value.trim()});

  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if( !formData.email || !formData.password ){
      return dispatch(signInFailure('All fields are required'));
    
    }
    try {
      dispatch(signInStart());
      const res= await fetch('/api/auth/signin',
    {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)

    });
    const data= await res.json();
    if(data.success=== 'false'){
      return dispatch(signInFailure(data.message));
      
      
    }
    
    if(res.ok){
      dispatch(signInSuccess(data));
       navigate('/');
      
    }
      
    } catch (error) {
      dispatch(signInFailure(error.message));

      
      
      
    }
  }
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
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          
          <div>
            <Label value='Your email' />
            
            <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}>
            </TextInput>
          </div>
          <div>
            <Label value='Your password' />
            
            <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}>
            </TextInput>
          </div>
          <Button type='submit' gradientDuoTone='purpleToBlue' disabled={loading}>
            {
              loading ?(<><Spinner size='sm' /> <span className='pl-3'>Loading ...</span></>): 'Sign In'
            }       

          </Button>
          <OAuth/>

        </form>
        <div className='text-sm mt-5 flex flex-row gap-2'>
          <span> Don't have an account ?</span>
          
            <Link to='/sign-up' className='text-blue-500' >
              
              Sign up 
            </Link>

        </div>
        <div>
          {
            errorMessage &&(
              <Alert className='mt-5' color='failure'>
              {errorMessage}
              </Alert> 
            )
          }
        </div>

        

      </div>



      </div>
      </div>
  )
}

