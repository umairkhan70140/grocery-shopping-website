import React from "react";
import Heading from "../Heading/Heading";

/* ⭐ Star Rating Component */
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center text-blue-500 text-lg">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

/* ⭐ Testimonials Data (8 Reviews) */
const testimonialsData = [
  {
    id: 1,
    name: "Ali Khan",
    role: "Web Client",
    message: "Amazing service! Modern and responsive website.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Business Owner",
    message: "Very professional and delivered on time.",
    rating: 4,
  },
  {
    id: 3,
    name: "Usman Shah",
    role: "Startup Founder",
    message: "Clean design and excellent communication.",
    rating: 5,
  },
 
];

/* ⭐ Main Component */
function Testimonial() {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20 bg-green-50">
      
      <Heading Highlight="Customer" Heading="Reviews" />

      {/* Scroll Container */}
      <div className="mt-12 h-[200px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-green-100">
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200"
            >
              <p className="text-gray-600 mb-4 text-center">
                "{item.message}"
              </p>

              <StarRating rating={item.rating} />

              <h3 className="text-xl font-semibold mt-4 text-center text-blue-600">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 text-center">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonial;