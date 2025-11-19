import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div className='w-[100%] min-h-[100vh] h-[100%] bg-black '>
         <BrowserRouter>
      <Nav/>

      <Content/>
      
      </BrowserRouter><Footer/>
      </div>
  )
}

export default App
