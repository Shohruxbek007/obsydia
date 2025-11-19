import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='w-[100%]h-[48px] px-[10px]  bg-[white] flex justify-between items-center'>
        <h1 className='text-[25px]'>Obsydia</h1>
        <ul className='flex gap-[30px] '>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/login">Login</Link></li><br />
        </ul> 
    </nav>
  )
}

export default Nav
