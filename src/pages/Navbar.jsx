import React from 'react'
import Logo from '../assets/log 1.png'

const Navbar = () => {
  return (
    <div className='flex lg:justify-between justify-center gap-8 items-center p-8 bg-white '>
        <div >
            <img src={Logo} alt="" className='w-20 h-20 object-contain'/>
        </div>
        <div className='flex items-center justify-between gap-8'>
            <button className='lg:px-4 lg:py-2 px-2 py-1 bg-[#E46962] rounded-full
             text-white hover:text-bold   '>
            プロモーションを共有する
            </button>
            <button className='lg:px-4 lg:py-2 px-2 py-1 bg-[#E46962] rounded-full
             text-white  hover:text-bold'>
            マイページ
            </button>
        </div>
    </div>
  )
}

export default Navbar