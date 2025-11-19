import React from 'react'
import shoes from './Products'
const Store = () => {
  return (
    <div className='flex flex-wrap justify-center gap-[30px]'>
      {shoes.map(shoe => <div  className='text-white w-[300px] '><img className='w-[100%]' src={shoe.img} alt="" /><div className='flex justify-between'><h1>{shoe.name}</h1><p className='text-gray-500'>{shoe.price}</p></div></div>)}
    </div>
  )
}

export default Store
