import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center justify-evenly w-[100%] h-[100%] text-inde items-center'>
      <form action="" className='w-[100%]  h-[100vh] flex justify-center items-center flex-col' >
        <input type="text" className='bg-white indent-[10px] rounded-[10px] w-[300px]' placeholder='Enter email'/><br />
        <input type="text" className='bg-white indent-[10px] rounded-[10px] w-[300px]' placeholder='Enter password'/><br />
           <button className='text-white border rounded-2xl w-[100px]'> Log in </button>

      </form>
    </div>
  )
}

export default Login
