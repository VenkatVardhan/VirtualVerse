
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Header } from './components/Header'
import { FooterComponent } from './components/FooterComponent'

import { PrivateRoute } from './components/PrivateRoute'


const App = () => {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/sign-in" element={<SignIn/>}/>
      <Route path ="/sign-up" element={<SignUp/>}/>
      <Route path ="/projects" element={<Projects/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Route>

      

    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    
  )
}

export default App

