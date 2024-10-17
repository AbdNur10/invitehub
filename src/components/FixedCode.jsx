import React from 'react'
import Logo from '../assets/log 1.png'
import SecondSection from '../pages/SecondSection'
import Footer from '../pages/Footer'

const FixedCode = () => {
  return (
    <>
     <div className="p-6 bg-white">
        <img src={Logo} alt="Logo" className="w-[120px] h-20 object-contain" />
      </div>
      <SecondSection />
      <Footer/>
    </>
  )
}

export default FixedCode