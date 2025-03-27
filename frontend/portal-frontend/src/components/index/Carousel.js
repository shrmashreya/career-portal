import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


const profiles = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "TechCorp",
    review: "Landed my dream job at TechCorp through this platform!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Marketing Manager",
    review: "Thanks to Placement Portal, I am now a Marketing Manager.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Patel",
    role: "Finance Firm",
    review: "Got hired by a top finance firm in just two weeks!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Software Engineer",
    review: "Secured my first tech job in a startup!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "Product Designer",
    review: "Placed as a Product Designer at a top firm.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? profiles.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 3 >= profiles.length ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Placed Students</h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          initial={false}
          animate={{ x: `-${index * 33.33}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              className="min-w-[33.33%] p-4 bg-white rounded-lg shadow-lg text-center"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-lg font-bold mt-4">{profile.name}</h3>
              <p className="text-gray-500">{profile.role}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-5 h-5 ${
                      i < profile.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-gray-700">{profile.review}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={prevSlide}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 ml-4 transition"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
