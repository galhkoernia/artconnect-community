/*
 * Created on Sat Nov 29 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/common/Button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  // Title Center
  const pageTitle = (() => {
  if (location.pathname === "/") return "Community";
  if (location.pathname === "/feed") return "Community";
  if (location.pathname === "/feature") return "Community";
  return "ArtConnect";
})();


  // Art Categories
  const categories = ["Digital", "Illustration", "3D Art", "Pixel", "Photo"];

  return (
    <header className="w-full bg-bg border-b border-soft shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between h-16">

           {/* Left Side — Hamburger & Mini Category List */}
          <div className="flex items-center gap-3">

            {/* Mobile Only - Hambuger */}
            <button
              className="md:hidden p-2 rounded-md bg-soft hover:bg-deep hover:text-white transition"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Menu size={22} />
            </button>

            {/* Desktop Only */}
            <div className="hidden md:flex items-center gap-3">
              {categories.map((c, i) => (
            <div
              key={i}
              className="bg-soft rounded-md px-3 py-1 text-[10px] text-text opacity-80 tracking-wide 
                 hover:opacity-100 hover:bg-deep hover:text-white transition"
            >
              {c}
            </div>
            ))}
            </div>


          </div>

          {/* Center Title */}
          <h1
            className="
            absolute left-1/2 -translate-x-1/2 
            font-poppins font-bold 
            text-[28px] md:text-[40px] 
           text-text 
            drop-shadow-sm
            whitespace-nowrap
            "
          >
            {pageTitle}
          </h1>



          {/* Right Side - Login/Register */}
          <div className="flex items-center gap-2">

            {/* Login */}
            <Link to="/login">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 text-text hover:border-deep hover:text-deep"
            >
              Login
            </Button>
            </Link>

            {/* Sign-up */}
            <Link to="/signup">
            <Button
              variant="primary"
              size="sm"
              className="hidden md:flex bg-deep text-white hover:bg-olive"
            >
              Sign Up
            </Button>
            </Link>
          </div>
        </div>

        {/* Moblile Down */}
        {openMenu && (
          <div className="md:hidden mt-3 bg-soft p-4 rounded-lg shadow-lg animate-slideDown">
            <p className="text-text font-medium mb-2">Categories</p>

            <div className="flex flex-col gap-2">
              {categories.map((item, index) => (
                <button
                  key={index}
                  className="text-text text-left px-3 py-2 rounded-md hover:bg-bg transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Signup Area */}
            <div className="mt-4">
              <Button className="w-full bg-deep text-white hover:bg-olive">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
