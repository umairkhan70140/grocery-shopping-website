import React from 'react'
import Button from '../Button/Button'
import Freshfruits from "../../assets/Grocify-images/fresh-fruits.png"

function Discount() {
  return (
    <section className="bg-zinc-100 max-w-[1400px] px-10 py-20 mx-auto rounded-lg  bg-cover bg-right" style={{backgroundImage:`url(${Freshfruits})`}}>
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Discount Badge */}
        <div className="text-5xl md:text-9xl font-bold text-blue-600  -rotate-90">
          20%
        </div>

        {/* Discount Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            First Order Discount!
          </h2>
          <p className="mb-6 text-gray-700">
            Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>

      </div>
    </section>
  )
}

export default Discount
