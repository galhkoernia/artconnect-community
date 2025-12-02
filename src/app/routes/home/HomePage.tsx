/*
 * Created on Fri Nov 28 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { useState, useRef } from "react";
import { Link } from "react-router-dom";

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

// ==============================
// SECTION 2
// ==============================
export function Section2() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const galleryImages = [
    { src: "src/assets/home/section3/section3-img-01.png" },
    { src: "src/assets/home/section3/section3-img-02.png" },
    { src: "src/assets/home/section3/section3-img-03.png" },
    { src: "src/assets/home/section3/section3-img-04.png" },
    { src: "src/assets/home/section3/section3-img-05.png" },
  ];

  const next = () => setCurrent(prev => (prev + 1) % galleryImages.length);
  const prev = () => setCurrent(prev => (prev - 1 + galleryImages.length) % galleryImages.length);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    const minSwipe = 40;
    
    if (Math.abs(distance) > minSwipe) {
      if (distance > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const POS = {
    0: "-420px",
    1: "0px", 
    2: "420px",
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center mb-16">
        <div className="w-[350px] md:w-[520px] h-[60px] md:h-[90px] bg-soft rounded-lg mb-3 opacity-70"></div>
        <div className="w-[380px] md:w-[600px] h-[40px] md:h-[55px] bg-soft rounded-lg opacity-70"></div>
      </div>

      {/* TouchAction */}
      <div
        className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center"
        style={{ touchAction: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {galleryImages.map((item, index) => {
          const offset = (index - current + galleryImages.length) % galleryImages.length;
          if (offset > 2) return null;

          return (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-out"
              style={{
                left: "50%",
                transform: `translateX(calc(-50% + ${POS[offset as 0 | 1 | 2]}))`,
                opacity: offset === 1 ? 1 : 0.6,
                zIndex: offset === 1 ? 20 : 5,
              }}
            >
              {offset === 0 && (
                <div className="w-[260px] md:w-[494px] h-[200px] md:h-[351px] rounded-xl bg-soft overflow-hidden">
                  <img src={item.src} className="w-full h-full object-cover" draggable="false" />
                </div>
              )}
              
              {offset === 1 && (
                <div className="w-[330px] md:w-[781px] h-[260px] md:h-[437px] rounded-xl shadow-lg bg-soft overflow-hidden">
                  <img src={item.src} className="w-full h-full object-cover" draggable="false" />
                </div>
              )}
              
              {offset === 2 && (
                <div className="w-[230px] md:w-[461px] h-[180px] md:h-[335px] rounded-xl bg-soft overflow-hidden">
                  <img src={item.src} className="w-full h-full object-cover" draggable="false" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-16">
        <div className="w-[250px] md:w-[773px] h-[2px] bg-text/40"></div>
      </div>
    </section>
  );
}

// ==============================
// SECTION 3
// ==============================
export function Section3() {
  return (
    <section className="bg-[#f5f5f5] py-28">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Puzzle Grid */}
<div className="relative w-full max-w-[380px] mx-auto">

  {/* TOP-LEFT */}
  <img 
    src="/src/assets/home/section5/section5-img-01.png"
    alt="top-left"
    className="absolute top-0 left-0 w-[165px] h-[165px] rounded-[22px] object-cover"
  />

  {/* TOP-RIGHT with DARK BACK BLOCK */}
  <div className="absolute top-0 right-0">
    {/* dark behind */}
    <div className="absolute top-[18px] left-[18px] w-[165px] h-[165px] rounded-[22px] bg-[#333]"></div>

    {/* main image */}
    <img 
      src="/src/assets/home/section5/section5-img-02.png"
      alt="top-right"
      className="relative w-[165px] h-[165px] rounded-[22px] object-cover z-10"
    />
  </div>

  {/* BOTTOM-LEFT (light bg behind + dark block on top) */}
  <div className="absolute top-[165px] left-0">
    {/* light behind */}
    <img 
      src="/src/assets/home/section5/section5-img-03.png"
      alt="bottom-left-light"
      className="w-[165px] h-[165px] rounded-[22px] object-cover opacity-[0.4]"
    />

    {/* dark in front */}
    <img 
      src="/src/assets/home/section5/section5-img-05.png"
      alt="bottom-left-dark"
      className="absolute top-[20px] left-[20px] w-[180px] h-[180px] rounded-[22px] object-cover z-20"
    />
  </div>

  {/* BOTTOM-RIGHT */}
  <img 
    src="/src/assets/home/section5/section5-img-04.png"
    alt="bottom-right"
    className="absolute top-[185px] right-0 w-[165px] h-[165px] rounded-[22px] object-cover"
  />

  <div className="h-[380px]"></div>
</div>

        {/* Right Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-extrabold mb-1">LOREUM IPSUM</h3>
          <h4 className="text-2xl font-semibold mb-4">consectetur</h4>

          <p className="text-gray-700 max-w-md leading-relaxed mb-8">
            Porem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          {/* Button */}
          <Link to="/feed">
            <Button className="w-[270px] h-[84px] bg-deep text-white hover:bg-olive text-xl">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==============================
// SECTION 4
// ==============================
export function Section4() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-5xl font-bold text-text mb-4">LOREUM IPSUM</h3>
            <h4 className="text-3xl font-semibold text-olive mb-6">consectetur</h4>

            <p className="text-gray-600 leading-relaxed max-w-md text-lg mb-8">
              Porem ipsum dolor sit amet, consectetur<br />
              adipiscing elit. Nunc vulputate libero et velit<br />
              interdum, ac aliquet odio mattis.
            </p>

            <Link to="/feature">
              <Button className="bg-deep text-white hover:bg-olive px-8 py-3">
                Discover More
              </Button>
            </Link>
          </div>

          {/* Image Composition */}
          <div className="relative w-full h-[500px] flex justify-center">
            {/* Back Image */}
            <img
              src="src/assets/home/section5/section5-img-04.png"
              alt="Main Artwork"
              className="absolute top-0 right-8 w-[400px] h-[450px] object-cover rounded-xl"
            />

            {/* Front Image */}
            <img
              src="src/assets/home/section5/section5-img-06.png"
              alt="Front Artwork"
              className="absolute bottom-8 left-12 w-[350px] h-[380px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==============================
// MAIN COMPONENT
// ==============================
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}