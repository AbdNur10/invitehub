import React from 'react'
import Navbar from '../pages/Navbar'
import Inputbox from '../pages/Inputbox'
import Section from '../pages/Section'
import GridComponent from '../pages/Grids'
import Footer from '../pages/Footer'


const TopPage = () => {
  return (
    <>
      <Navbar />
      <Inputbox/>
      <Section/>
      <GridComponent/>
      <Footer/>
    </>
  )
}

export default TopPage