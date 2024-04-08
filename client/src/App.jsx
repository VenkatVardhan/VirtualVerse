
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { About } from './pages/About'
import { Projects } from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/sign-in" element={<SignIn/>}/>
      <Route path ="/sign-up" element={<SignUp/>}/>
      <Route path ="/projects" element={<Projects/>}/>
      <Route path ="/dashboard" element={<Dashboard/>}/>
      

    </Routes>
    </BrowserRouter>
    
  )
}

export default App

