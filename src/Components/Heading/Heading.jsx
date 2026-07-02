import React from 'react'

function Heading(prop) {
  return (
    <div>
      <div className='mx-auto w-fit'>
        <h2 className='md:text-5xl text-2xl font-bold'>
            <span className='text-blue-500'>{prop.Highlight}</span> {prop.Heading}
        </h2>
        <div className=' w-45 h-1 bg-blue-500 mt-3 ml-auto'> </div>
       </div>
    </div>
  )
}

export default Heading
