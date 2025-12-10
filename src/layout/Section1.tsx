/*
 * Created on Tue Dec 02 2025
 *
 * Copyright (c) 2025 Your Company
 */

import React, { useState, useRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

function Button({ children, className = "", variant = "default", ...props }: ButtonProps) {
  const base = "font-semibold rounded-lg transition";
  const variants = {
    default: "bg-deep text-white hover:bg-olive",
    outline: "border-2 border-deep text-deep hover:bg-deep hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// Coursel Images
const SLIDE_IMAGES = [
  "src/assets/home/section1/section1-img-01.png",
  "src/assets/home/section1/section1-img-02.png",
  "src/assets/home/section1/section1-img-03.png",
  "src/assets/home/section1/section1-img-04.png",
  "src/assets/home/section1/section1-img-05.png",
  "src/assets/home/section1/section1-img-06.png",
];

const getCircularIndex = (index: number, length: number) => {
  return ((index % length) + length) % length;
};

// Function Component
export function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const getLeftImage = () => {
    const leftIndex = getCircularIndex(currentIndex - 1, SLIDE_IMAGES.length);
    return SLIDE_IMAGES[leftIndex];
  };

  const getCenterImage = () => {
    return SLIDE_IMAGES[currentIndex];
  };

  const getRightImage = () => {
    const rightIndex = getCircularIndex(currentIndex + 1, SLIDE_IMAGES.length);
    return SLIDE_IMAGES[rightIndex];
  };

  const next = () => {
    setCurrentIndex((prev: number) => getCircularIndex(prev + 1, SLIDE_IMAGES.length));
  };

  const prev = () => {
    setCurrentIndex((prev: number) => getCircularIndex(prev - 1, SLIDE_IMAGES.length));
  };


  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        next(); 
      } else {
        prev(); 
      }
    }
    
    touchStartX.current = null;
  };

  // Handle Clicks
  const handleLeftClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    prev();
  };

  const handleCenterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    next();
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    next();
  };

  return (
    <section className="relative min-h-screen bg-bg overflow-hidden">

      {/* Background */}
      <div
  className="absolute inset-0 overflow-hidden z-0"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>

  {/* Image Layer  */}
  <div className="relative w-full h-full">

    {/*  Background */}
    <div
  className="absolute left-1/2 -translate-x-1/2 z-0"
  style={{
    width: "1280px",
    height: "1051px",
    top: "0",
    background: "rgba(175, 183, 172, 0.20)", 
    backdropFilter: "blur(2px)",               
    borderBottomLeftRadius: "60px",
    borderBottomRightRadius: "60px",
  }}
/>

    {/* Left Panel */}
    <div 
      className="absolute top-48 md:top-56 left-8 md:left-16 
          w-[180px] md:w-[228px] h-[250px] md:h-[320px]
          bg-soft rounded-t-[90px] overflow-hidden transition-all duration-500
          cursor-pointer hover:opacity-90 active:scale-95"
      onClick={handleLeftClick}
    >
      <img 
        src={getLeftImage()} 
        alt="Previous" 
        className="w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
    </div>

    {/* Center Panel */}
    <div 
      className="absolute top-36 md:top-44 left-1/2 -translate-x-1/2
          w-[300px] md:w-[409px] h-[420px] md:h-[578px]
          bg-soft rounded-t-[150px] overflow-hidden shadow-xl transition-all duration-500
          z-10 cursor-pointer hover:shadow-2xl active:scale-[0.98]"
      onClick={handleCenterClick}
    >
      <img 
        src={getCenterImage()} 
        alt="Current" 
        className="w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
    </div>

    {/* Right Panel */}
    <div 
      className="absolute top-40 md:top-[380px] right-8 
          w-[240px] md:w-[329px] h-[300px] md:h-[443px]
          bg-soft rounded-t-[120px] overflow-hidden transition-all duration-500
          cursor-pointer hover:opacity-90 active:scale-95"
      onClick={handleRightClick}
    >
      <img 
        src={getRightImage()} 
        alt="Next" 
        className="w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
    </div>

    {/* Navigation */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      {SLIDE_IMAGES.map((_, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex(index);
          }}
          className={`
            w-2 h-2 rounded-full transition-all duration-300
            ${index === currentIndex 
              ? 'bg-white w-8' 
              : 'bg-white/40 hover:bg-white/60 cursor-pointer'
            }
          `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

  </div>
      </div>

      {/* Text Layer */}
      <div className="relative z-8 container mx-auto px-6 min-h-screen">

      {/* Mobile */}
      <div className="
           absolute 
           bottom-8           /* HP */
           md:bottom-0         /* Desktop */
           left-4 md:left-0 
           max-w-3xl
       ">

          <h1 className="font-extrabold text-text tracking-tight leading-[0.9] 
              text-[55px] md:text-[110px] mb-2">
              ARTCONNECT
          </h1>

          <h2 className="font-bold text-olive text-[25px] md:text-[32px] mb-6">
          Discover Art & History
          </h2>

        <p className="text-text/80 text-lg max-w-xl leading-relaxed mb-10">
          Welcome to ArtConnect, a curated space showcasing masterpieces, exhibitions,
          and stories from the world of art. Explore timeless collections, learn about
          artists, and experience art through a modern digital gallery.
        </p>

         </div>
      </div>
      
    </section>
  );
}