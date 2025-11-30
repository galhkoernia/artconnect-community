/*
 * Created on Fri Nov 28 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const base = "font-semibold rounded-lg transition";
  const variants: Record<Exclude<ButtonProps["variant"], undefined>, string> = {
    default: "bg-deep text-white hover:bg-olive",
    outline: "border-2 border-deep text-deep hover:bg-deep hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

const SLIDES = [
  {
    left: "src/assets/home/section1/section1-img-01.png",
    center: "src/assets/home/section1/section1-img-02.png",
    right: "src/assets/home/section1/section1-img-04.png",
  },
  {
    left: "src/assets/home/section1/section1-img-01.png",
    center: "src/assets/home/section1/section1-img-02.png",
    right: "src/assets/home/section1/section1-img-04.png",
  },
  {
    left: "src/assets/home/section1/section1-img-01.png",
    center: "src/assets/home/section1/section1-img-02.png",
    right: "src/assets/home/section1/section1-img-04.png",
  },
];


// SECTION 1

export function Section1() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // === Slide Navigation ===
  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  // === Touch Handlers for Swipe ===
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 60) next(); // swipe left
    if (distance < -60) prev(); // swipe right
  };

  return (
    <section className="relative min-h-screen bg-bg overflow-hidden">

      {/* BACKGROUND CAROUSEL */}
      <div
        className="absolute inset-0 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, idx) => (
            <div key={idx} className="relative w-full h-full shrink-0">

              {/* LEFT PANEL — 228×320 */}
              <div className="absolute top-32 left-16 w-[228px] h-[320px] bg-soft rounded-t-[90px] overflow-hidden">
                <img src={slide.left} className="w-full h-full object-cover" />
              </div>

              {/* CENTER PANEL — 409×578 */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[409px] h-[578px] bg-soft rounded-t-[150px] overflow-hidden">
                <img src={slide.center} className="w-full h-full object-cover" />
              </div>

              {/* RIGHT PANEL — 329×443 */}
              <div className="absolute top-40 right-12 w-[329px] h-[443px] bg-soft rounded-t-[120px] overflow-hidden">
                <img src={slide.right} className="w-full h-full object-cover" />
              </div>

            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-bg/45" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-end pb-24">
        <div className="max-w-3xl">

          <h1 className="font-extrabold text-text tracking-tight leading-[0.9] text-[55px] md:text-[110px] mb-2">
            LOREUM IPSUM
          </h1>

          <h2 className="font-bold text-olive text-[25px] md:text-[32px] leading-tight mb-6">
            consectetur
          </h2>

          <p className="text-text/80 text-lg max-w-xl leading-relaxed mb-10">
            Porem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          <div className="flex gap-4">
            <Link to="/feed">
              <Button className="px-10 py-3">Explore Community</Button>
            </Link>
            <Button variant="outline" className="px-10 py-3">Join Now</Button>
          </div>

        </div>
      </div>
    </section>
  );
}

// SECTION 2
export function Section2() {
  /* ======================
     SECTION 3 — SLIDER LOGIC
  ======================= */

  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    { src: "src/assets/home/section3/section3-img-01.png", alt: "Gallery Image 1" },
    { src: "src/assets/home/section3/section3-img-02.png", alt: "Gallery Image 2" },
    { src: "src/assets/home/section3/section3-img-03.png", alt: "Gallery Image 3" },
    { src: "src/assets/home/section3/section3-img-04.png", alt: "Gallery Image 4" },
    { src: "src/assets/home/section3/section3-img-05.png", alt: "Gallery Image 5" },
  ];

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = () =>
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);

  const prev = () =>
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    <section className="container mx-auto px-4 py-16">

      {/* ===========================
          SECTION 2 — INFO BARS
      ============================ */}
      <div className="flex flex-col items-center mb-12">
        {/* Top Rectangle (diperkecil) */}
        <div className="w-[380px] h-[60px] bg-soft rounded-lg mb-3 opacity-60"></div>

        {/* Bottom Rectangle (diperkecil) */}
        <div className="w-[420px] h-[40px] bg-soft rounded-lg opacity-60"></div>
      </div>

      {/* ===========================
          SECTION 3 — SWIPE CAROUSEL
      ============================ */}
      <div
        className="relative max-w-3xl mx-auto overflow-hidden rounded-xl touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-[380px] md:h-[437px] overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// SECTION 3
export function Section3() {
  return (
    <section className="bg-[#f5f5f5] py-28">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Puzzle Grid with Images */}
        <div className="relative w-full max-w-[380px] mx-auto">
          {/* Top-left image */}
          <img 
            src="/src/assets/home/section5/section5-img-01.png"
            alt="Artwork 1"
            className="absolute top-0 left-0 w-[160px] h-[160px] object-cover rounded-2xl"
          />

          {/* Top-right image */}
          <img 
            src="/src/assets/home/section5/section5-img-02.png"
            alt="Artwork 2"
            className="absolute top-0 right-0 w-[180px] h-[180px] object-cover rounded-3xl shadow-[12px_12px_0_#444]"
          />

          {/* Bottom-left image */}
          <img 
            src="/src/assets/home/section5/section5-img-03.png"
            alt="Artwork 3"
            className="absolute top-[130px] left-0 w-[170px] h-[170px] object-cover rounded-3xl"
          />

          {/* Bottom-right image */}
          <img 
            src="/src/assets/home/section5/section5-img-04.png"
            alt="Artwork 4"
            className="absolute top-[180px] right-0 w-[160px] h-[140px] object-cover rounded-2xl"
          />

          {/* Spacer wrapper height */}
          <div className="h-[360px]"></div>
        </div>

        {/* Right Text Block */}
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-extrabold mb-1">LOREUM IPSUM</h3>
          <h4 className="text-2xl font-semibold mb-4">consectetur</h4>

          <p className="text-gray-700 max-w-md leading-relaxed mb-8">
            Porem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          {/* Small Button Box */}
          <Link to="/details">
            <Button className="w-[140px] bg-deep text-white hover:bg-olive">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// SECTION 4
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

// MAIN COMPONENT THAT COMBINES ALL SECTIONS
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}