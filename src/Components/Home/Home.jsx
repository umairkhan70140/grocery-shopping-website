import React from 'react'
// import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Heading from '../Heading/Heading'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discound/Discount'
import Process from '../Process/Process'
import Testimonial from '../Testimonial/testimonial'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <Hero/>
        <Category/>
        <Values/>
        <Products/>
        <Discount/>
        <Process/>
        <Testimonial/>
      
      
   
    </div>
  )
}

export default Home
