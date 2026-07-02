import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";
import Button from "../Button/Button";

function Cards({ product }) {
  if (!product) return null; // safety check

  return (
    <div className="border p-4 rounded-lg shadow-md">
      {/* Card Icons */}
      <div className="flex justify-between">
        <span className="text-red-500 cursor-pointer">
          <FaHeart />
        </span>
        <button className="text-green-500">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="py-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-50+ "
        />
      </div>

      {/* Card Footer */}
      <div className="text-center">
        <h2 className="text-lg font-semibold">
          {product.name}
        </h2>
        <p className="text-gray-600 ">
          ${product.price}
        </p>
        <Button content= "Shop Now" />
      </div>
    </div>
  );
}

export default Cards;
