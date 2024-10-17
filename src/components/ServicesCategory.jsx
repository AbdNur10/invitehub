import React from 'react'
import Logo from '../assets/log 1.png'
import SecondInputbox from '../pages/SecondInputBox'
import SecondSection from '../pages/SecondSection'
import SecondGrid from '../pages/SecondGrid'
import Footer from '../pages/Footer'

const ServicesCategory = () => {
  return (
    <>
    <div className='bg-white'>
    <div className="p-6 bg-white">
        <img src={Logo} alt="Logo" className="w-[120px] h-20 object-contain" />
      </div>
      <SecondInputbox/>
      <SecondSection/>
      <SecondGrid/>
      <Footer/>
    </div>
    </>
  )
}

export default ServicesCategory