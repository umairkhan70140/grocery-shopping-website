import React from 'react'

function Button(prop) {
  return (
    <div>
       <button className='bg-gradient-to-b from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg md:text-lg text-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:from-blue-600'>{prop.content}</button>
    </div>
  )
}

export default Button
