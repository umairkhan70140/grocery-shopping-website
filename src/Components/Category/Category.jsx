import React from 'react'
import Heading from '../Heading/Heading'
import Fruitcat from "../../assets/Grocify-images/fruits-and-veggies.png";
import Dirayeggs from "../../assets/Grocify-images/dairy-and-eggs.png";
import Meatfood from "../../assets/Grocify-images/meat-and-seafood.png";
import { Link } from 'react-router-dom';

const Categorys = [
  {
    id: "1",
    title: "Fruits & Veggies",
    description: "Fresh, organic produce sourced daily from local farms.",
    image: Fruitcat,
    path: "/fruits"   
  },
  {
    id: "2",
    title: "Dairy & Eggs",
    description: "Wholesome dairy products and free-range eggs.",
    image: Dirayeggs,
    path: "/diray"    
  },
  {
    id: "3",
    title: "Meat & Seafood",
    description: "High-quality, responsibly sourced meat and seafood.",
    image: Meatfood,
    path: "/seafood"  
  },
];

function Category() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20">
      <Heading Highlight="Shop" Heading="By Category" />

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {Categorys.map((card) => (
          <div
            key={card.id}
            className="bg-zinc-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-6">
              <img
                src={card.image}
                alt={card.title}
                className="h-40 object-contain"
              />
            </div>

            <h3 className="font-bold text-xl mb-2">{card.title}</h3>

            <p className="text-gray-600 text-sm mb-4">
              {card.description}
            </p>

            
            <Link
              to={card.path}
              className="text-blue-600 font-semibold hover:underline"
            >
              See All
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;