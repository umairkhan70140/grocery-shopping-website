import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShield } from "react-icons/fa6";
import fullvegetable from "../../assets/Grocify-images/basket-full-vegetables.png";

const Value = [
  {
    id: "1",
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: "2",
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: "3",
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShield />,
  },
  {
    id: "4",
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];

function Values() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20">
      
      {/* Heading */}
      <Heading Highlight="Our" Heading="Values" />

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center mt-12 ">

        {/* Left Section - Value Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {Value.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl text-blue-600 mb-4">
                {item.icon}
              </div>
              {/* img section  */}
              
              <h3 className="font-bold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.para}
              </p>
            </div>
          ))}
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src={fullvegetable}
            alt="Basket"
            className="max-w-[450px] w-full object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Values;
