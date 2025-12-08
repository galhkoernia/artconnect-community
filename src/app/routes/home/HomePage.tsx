/*
 * Created on Fri Nov 28 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

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
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef<number | null>(null);

  const galleryImages = [
    { src: "src/assets/home/section3/section3-img-01.png" },
    { src: "src/assets/home/section3/section3-img-02.png" },
    { src: "src/assets/home/section3/section3-img-03.png" },
    { src: "src/assets/home/section3/section3-img-04.png" },
    { src: "src/assets/home/section3/section3-img-05.png" },
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchX = e.touches[0].clientX;
    dragStartXRef.current = touchX;
    setIsDragging(true);
    setDragX(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartXRef.current === null) return;
    
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - dragStartXRef.current;
    
    const maxDrag = 300;
    const limitedDrag = Math.max(Math.min(deltaX, maxDrag), -maxDrag);
    
    setDragX(limitedDrag);
    
    e.preventDefault(); 
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartXRef.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - dragStartXRef.current;

    const threshold = 100; 
    
    if (deltaX < -threshold) {
      next();
    } else if (deltaX > threshold) {
      prev();
    }
    
    setIsDragging(false);
    setDragX(0);
    dragStartXRef.current = null;
  };

  const POS = {
    0: -420,
    1: 0,
    2: 420,
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div
        className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ touchAction: "pan-y" }}
      >
        {galleryImages.map((item, i) => {
          const offset = (i - current + galleryImages.length) % galleryImages.length;
          if (offset > 2) return null;

          let x = POS[offset];
          
          if (isDragging) {
            if (offset === 1) {
              x += dragX;
            } else if (offset === 0) {
              x += dragX * 0.4;
            } else if (offset === 2) {
              x += dragX * 0.4;
            }
          }

          let opacity = 0.6;
          let scale = 1;
          
          if (offset === 1) {
            opacity = 1;
            scale = 1;
          } else if (offset === 0) {
            opacity = 0.7;
            scale = 0.85;
          } else if (offset === 2) {
            opacity = 0.7;
            scale = 0.85;
          }

          if (isDragging && Math.abs(dragX) > 50) {
            if (offset === 1) {
              opacity = Math.max(0.7, 1 - Math.abs(dragX) / 500);
            }
          }

          return (
            <div
              key={i}
              className="absolute transition-all duration-300 ease-out"
              style={{
                left: "50%",
                transform: `translateX(calc(-50% + ${x}px)) scale(${scale})`,
                opacity: opacity,
                zIndex: offset === 1 ? 30 : offset === 0 ? 20 : 10,
                transition: isDragging 
                  ? "transform 0.1s ease-out, opacity 0.1s ease-out" 
                  : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-out",
                willChange: isDragging ? "transform, opacity" : "auto",
              }}
            >
              {offset === 1 && (
                <div className="w-[330px] md:w-[781px] h-[260px] md:h-[437px] bg-soft rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover select-none" 
                    draggable="false"
                    alt={`Gallery image ${i + 1}`}
                  />
                </div>
              )}

              {offset === 0 && (
                <div className="w-[260px] md:w-[494px] h-[200px] md:h-[351px] bg-soft rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover select-none" 
                    draggable="false"
                    alt={`Gallery image ${i + 1}`}
                  />
                </div>
              )}

              {offset === 2 && (
                <div className="w-[230px] md:w-[461px] h-[180px] md:h-[335px] bg-soft rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover select-none" 
                    draggable="false"
                    alt={`Gallery image ${i + 1}`}
                  />
                </div>
              )}
            </div>
          );
        })}
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

          {/* Top Left */}
          <img 
            src="/src/assets/home/section5/section5-img-01.png"
            alt="top-left"
            className="absolute top-5 left-0 w-[165px] h-[135px] rounded-[16px] object-cover"
          />

          {/* Top Right */}
          <div className="absolute top-0 right-0">
            <div className="absolute top-[18px] left-[18px] w-[165px] h-[165px] rounded-[22px] bg-[#333]"></div>

              {/* main image */}
              <img 
                src="/src/assets/home/section5/section5-img-02.png"
                alt="top-right"
                className="relative w-[165px] h-[165px] rounded-[22px] object-cover z-10"
              />
            </div>

          {/* Bottom Left */}
         <div className="absolute top-[170px] left-0">
          {/* light behind */}
          <img 
            src="/src/assets/home/section5/section5-img-03.png"
            alt="bottom-left-light"
            className="w-[170px] h-[185px] rounded-[22px] object-cover opacity-[0.4]"
          />

          {/* Dark in front */}
          <img 
            src="/src/assets/home/section5/section5-img-05.png"
            alt="bottom-left-dark"
            className="absolute top-[25px] left-[20px] w-[180px] h-[180px] rounded-[22px] object-cover z-20"
            />
         </div>

          {/* Bottom Right */}
          <img 
            src="/src/assets/home/section5/section5-img-04.png"
            alt="bottom-right"
            className="absolute top-[205px] right-0 w-[165px] h-[165px] rounded-[22px] object-cover"
          />

          <div className="h-[380px]"></div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-extrabold mb-1">ARTCONNECT</h3>
          <h4 className="text-2xl font-semibold mb-4">Collection</h4>

          <p className="text-gray-700 max-w-md leading-relaxed mb-8">
            Our growing collection features artworks and cultural pieces from various
            periods in history. Explore paintings, sculptures, and artifacts curated
            to inspire and educate visitors around the world.
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
          
          {/* Image Composition */}
          <div className="relative w-full h-[350px] lg:h-[500px] flex justify-center order-1 lg:order-2 mb-10 lg:mb-0">
            {/* Back Image */}
            <img
              src="src/assets/home/section5/section5-img-04.png"
              alt="Main Artwork"
              className="absolute top-0 right-2 w-[400px] h-[420px] object-cover rounded-xl"
            />

            {/* Front Image */}
            <img
              src="src/assets/home/section5/section5-img-06.png"
              alt="Front Artwork"
              className="absolute bottom-8 left-2 w-[350px] h-[380px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-5xl font-bold text-text mb-4">Featured Exhibition</h3>
            <h4 className="text-3xl font-semibold text-olive mb-6">Contemporary Highlights</h4>

            <p className="text-gray-600 leading-relaxed max-w-md text-lg mb-8">
              Discover selected works that spotlight artistic innovation and cultural<br />
              expression. Each piece in this feature reflects the creativity and vision<br />
              that shape the world of contemporary art.
            </p>
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