/*
 * Created on Wed Dec 03 2025
 *
 * Copyright (c) 2025 Your Company
 */

import React, { useEffect } from "react";

export const FeaturePage: React.FC = () => {

  // SYNC SCROLL
  useEffect(() => {
    const left = document.getElementById("viewport-left");
    const right = document.getElementById("viewport-right");

    if (!left || !right) return;

    const syncScroll = () => {
      right.scrollLeft = left.scrollLeft;
    };

    left.addEventListener("scroll", syncScroll);

    return () => left.removeEventListener("scroll", syncScroll);
  }, []);

  // Array of feature images
  const FeatureImages = [
  "src/assets/feature/feature2/feature2-img-01.png",
  "src/assets/feature/feature2/feature2-img-02.png",
  "src/assets/feature/feature2/feature2-img-03.png",
];


  return (
    <div className="min-h-screen bg-bg">
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-24">


        {/* Section 1 */}
        <div className="w-full flex flex-col items-center">

          {/* Top Bar */}
          <div
            className="bg-soft rounded-xl mx-auto"
            style={{
              width: "420px",
              height: "76px",
            }}
          />

          {/* Main Image */}
          <div className="mt-12 flex flex-col md:flex-row gap-10 md:gap-16 justify-center w-full">

            {/* Left Viewport */}
            <div
              id="viewport-left"
              className="
                overflow-x-scroll
                overflow-y-hidden
                scroll-smooth
                touch-pan-x
                rounded-3xl
                bg-soft
                scrollbar-none
              "
              style={{
                width: "732px",
                height: "763px",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <img
                src="src/assets/feature/feature1/feature1-img-01.png"
                className="h-full object-cover select-none pointer-events-none"
                style={{ width: "1600px" }}
                draggable="false"
              />
            </div>

            {/* Right Viewport */}
            <div
              id="viewport-right"
              className="
                overflow-hidden
                rounded-3xl
                bg-soft
              "
              style={{
                width: "420px",
                height: "763px",
              }}
            >
              <div
                className="overflow-hidden"
                style={{
                  width: "420px",
                  height: "763px",
                }}
              >
                <img
                  src="src/assets/feature/feature1/feature1-img-03.png"
                  className="h-full object-cover select-none pointer-events-none"
                  style={{ width: "1600px" }}
                  draggable="false"
                />
              </div>
            </div>

          </div>

          {/* Lines */}
          <div className="mt-16 flex flex-col items-center gap-6">
            <div
              className="bg-text/40"
              style={{ width: "1280px", height: "2px" }}
            ></div>
            <div
              className="bg-text/40"
              style={{ width: "737px", height: "2px" }}
            ></div>
          </div>

        </div>

        {/* Section 2 */}
        <section className="w-full bg-bg rounded-[32px] px-6 py-16 flex flex-col items-center">

          {/* Top bar */}
          <div
            className="bg-soft rounded-2xl mx-auto"
            style={{
              width: "min(666px, 90%)",
              height: "181px",
            }}
          />

          <div className="mt-10 w-full">

{/* Desktop */}
<div
  className="
    hidden md:flex
    overflow-x-auto
    flex-nowrap
    gap-12
    scroll-smooth
    touch-pan-x
    px-4
    scrollbar-none
  "
  style={{ width: "100%" }}
>
  {FeatureImages.map((src, index) => (
    <div
      key={index}
      className="
        bg-white
        rounded-[32px]
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
        overflow-hidden
      "
      style={{ width: "419px", height: "585px" }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

{/* Mobile */}
<div
  className="
    flex md:hidden
    gap-8
    overflow-x-auto
    scroll-smooth
    touch-pan-x
    px-4
    scrollbar-none
  "
>
  {FeatureImages.map((src, index) => (
    <div
      key={index}
      className="
        flex-shrink-0
        bg-white
        rounded-[28px]
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
        overflow-hidden
      "
      style={{ width: "280px", height: "390px" }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
          </div>
        </section>

        {/* Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-soft/70 rounded-2xl h-28 shadow-[0_4px_18px_rgba(0,0,0,0.04)]"
            />
          ))}
        </section>

      </main>
    </div>
  );
};

