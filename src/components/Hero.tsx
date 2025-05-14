"use client";
import { Link } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    "images/home-pic.png",
    "images/backgroundphoto.jpeg",
    "images/ETB.jpeg",
    "images/ethicscomp.jpg",
    "images/daniellambo.jpg",
  ];

  useEffect(() => {
    // Change the background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <header
      id="home"
      className="text-white text-center py-20 relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to IEEE AAMU</h1>
        <p className="mt-4 text-xl">Advancing Technology for Humanity</p>
        <div className="mt-8">
          <Link href="https://www.ieee.org/">
            <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-maroon-700 transition">
              Explore IEEE
            </button>
          </Link>
        </div>
        <div className="flex mt-8 space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentImageIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </header>
  );
}
