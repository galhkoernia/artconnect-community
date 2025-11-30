/*
 * Created on Sat Nov 29 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/common/Button';

export const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm border-b border-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-deep font-bold text-sm">A</span>
              </div>
              <h1 className="text-xl font-semibold text-deep">ArtConnect</h1>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-200 font-medium ${
                location.pathname === '/' ? 'text-deep font-semibold' : 'text-gray-600 hover:text-deep'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/feed" 
              className={`transition-colors duration-200 font-medium ${
                location.pathname === '/feed' ? 'text-deep font-semibold' : 'text-gray-600 hover:text-deep'
              }`}
            >
              Community.Feed
            </Link>
            <a 
              href="#" 
              className="text-gray-600 hover:text-deep transition-colors duration-200 font-medium"
            >
              Exhibitions
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-deep transition-colors duration-200 font-medium"
            >
              Artists
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-300 text-gray-700 hover:border-deep hover:text-deep"
            >
              Login
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              className="bg-deep text-white hover:bg-olive"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};