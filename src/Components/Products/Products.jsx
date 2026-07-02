// state import section 
import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Productslist from "../Productlist/Productlist"; // make sure this file exports Productslist array
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Products() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [active, setActive] = useState("All");

  // ✅ Filter products based on active category
  const filteredProducts =
    active === "All"
      ? Productslist
      : Productslist.filter((product) => product.category === active);

  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20">

      {/* Heading */}
      <Heading Highlight="Our" Heading="Products" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center py-10 gap-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-lg rounded-lg transition duration-300
              ${active === cat
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 hover:bg-blue-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>

      {/* view all  */}
       <div className="flex justify-center py-5">
           
             <Link
              to="/AllProducts"
              className="text-blue-600 font-semibold hover:underline"
            >
              See All
            </Link>
       </div>

    </section>
  );
}

export default Products;
