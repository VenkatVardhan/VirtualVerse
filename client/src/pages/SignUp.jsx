import React, { useState } from 'react'

import { Link, useNavigate} from 'react-router-dom'

import {Alert, Button,Label, Spinner, TextInput} from 'flowbite-react'



export const SignUp = () => {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({});
  const [errorMessage,setErrorMessage]=useState(null);
  const [loading,setLoading]=useState(false);


  const handleChange = (e)=>{
    
    setFormData({...formData,[e.target.id]:e.target.value.trim()});

  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password ){
      return setErrorMessage('All fields are required');
    
    }
    try {
      setErrorMessage(null);
      setLoading(true);
      const res= await fetch('/api/auth/signup',
    {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)

    });
    const data= await res.json();
    if(data.success=== 'false'){
      setLoading(false);
      return setErrorMessage(data.message);
      
      
    }
    setLoading(false);
    if(res.ok){
       navigate('/sign-in');
      
    }
      
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);

      
      
      
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
            <Label value='Your username' />
            
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} >
            </TextInput>
          </div>
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
              loading ?(<><Spinner size='sm' /> <span className='pl-3'>Loading ...</span></>): 'Sign Up'
            }       

          </Button>

        </form>
        <div className='text-sm mt-5 flex flex-row gap-2'>
          <span> Have an account ?</span>
          
            <Link to='/sign-in' className='text-blue-500' >
              
              Sign in 
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
