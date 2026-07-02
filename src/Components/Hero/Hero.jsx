import React from 'react'
 import Grocery from "../../assets/Grocify-images/grocery.png";
import Button from '../Button/Button';




function Hero() {
   
  return (
    <div>
      <section className='max-w-[1400px] flex md:flex-row flex-col items-center md:pt-20 pt-35 min-h-screen px-10 mx-auto'>
     {/* content section */}

     <div className='flex-1'>
   <span className='bg-blue-100 font-bold md:text-lg text-sm  md:px-5  md:py-3 px-5 py-2  rounded-full'> Export Best Quality</span>
     <h1 className='md:text-7xl/22 text-4xl/12 mt-5 font-bold'> Testy Organic <span className='text-blue-500'>Fruits</span> & <span className='text-blue-500'>Vaggies</span> <br/> In your City </h1>
     
       <p className='md:text-lg max-w-[500px] mt-5 mb-10'> Bread for a high content fo beneficial substances. our product are all fresh healthy</p>
       <Button content = "Shop Now"/>
     </div>

     {/* image Section  */}
     <div className='flex-1'>
        <img src={Grocery} alt='hero image'/>
     </div>
      </section>
    </div>
  )
}

export default Hero
