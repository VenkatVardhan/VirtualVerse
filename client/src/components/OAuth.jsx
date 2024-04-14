import { Button } from 'flowbite-react'
import React from 'react'
import { FcGoogle} from 'react-icons/fc'
import {GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth'
import { app } from '../firebase.js'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signInSuccess ,signInFailure} from '../redux/user/userSlice.js'

export const OAuth =  () => {
    const auth=getAuth(app);
    const dispatch=useDispatch();
    const navigate=useNavigate();
        
    const handleGoogleClick=async ()=>{
        
        const provider = new  GoogleAuthProvider(app);
        
        provider.setCustomParameters({prompt:'select_account'});
        try{
        const resultGoogle= await signInWithPopup(auth,provider);
        console.log(resultGoogle);
        const res=await fetch('api/auth/google',
                         {method:'POST',
                         headers:{'Content-Type':'application/json'},
                         body:JSON.stringify({email:resultGoogle.user.email,
                                name:resultGoogle.user.displayName,
                                googlePhotoURL:resultGoogle.user.photoURL,        
                        }),

                        });
        const data=await res.json();
        if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
        
        }
    }

        

        

        

        catch(error){
            console.log(error);
        }

    }
  return (
    <Button onClick={handleGoogleClick} type='button' className=' "border border-blue-500 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700'  >
       <FcGoogle className='w-6 h-6 mr-3'/> Continue with Google
        </Button>
  )
}
