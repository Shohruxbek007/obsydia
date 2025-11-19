import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (

<div className='w-[100%] min-h[100vh] h-[100%]'>
        <div className="px-[100px] flex justify-center flex-col column text-white bg-[url('shoe.mp4')] w-[100%] min-h[100vh] h-[150%] bg-cover bg-center justify-evenly bg-no-repeat">

          <h1 className="text-[10vw]">Wear</h1>
          <h1 className="text-[10vw]">The</h1>
          <h1 className="text-[10vw]">Void</h1>
</div>
<div className="w-[100%] h-[100%] flex justify-evenly bg-black">
  <Link to="/store"><img src="Unknown-7.jpeg" className='w-[90%]' alt="" /></Link>
  <Link to="/store"><img src="Unknown-8.jpeg" className='w-[90%]' alt="" /></Link>
  <Link to="/store"><img src="Unknown-9.jpeg" className='w-[90%]' alt="" /></Link>
</div>
</div>
  )
}

export default Home
