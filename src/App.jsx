import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (

    <BrowserRouter>

    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/logout' element={<Logout/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}
