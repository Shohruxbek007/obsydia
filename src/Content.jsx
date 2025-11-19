import React from 'react'
import Home from './Pages/Home'
import AboutUS from './Pages/AboutUS'
import Contact from './Pages/Contact'
import Store from './Pages/Store'
import News from './Pages/News'
import Login from './Pages/Login'
import Footer from './Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const Content = () => {
  return (
 
    <div className='w-[100%] h-[100%]'>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<AboutUS/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/store' element={<Store/>} />
<Route path='/news' element={<News/>} />
<Route path='/login' element={<Login/>} />


      
</Routes>


      <Footer/>
    </div>
    
  )
}

export default Content
