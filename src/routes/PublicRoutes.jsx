import React from 'react'
import PublicLayout from '../layout/PublicLayout'
import {Routes, Route} from "react-router-dom"
import Register from '../pages/login/Register'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Resources from '../pages/Resources/Resources'
import Services from '../pages/Services/Services'
import Solution from '../pages/Solution/Solution'
import Login from '../pages/login/Login'
import CheckMail from '../pages/CheckMail/CheckMail'

const PublicRoutes = () => {
  return (
    <PublicLayout>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/solutions' element={<Solution/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkMail' element={<CheckMail/>}/>
            
        </Routes>
    </PublicLayout>
  )
}

export default PublicRoutes