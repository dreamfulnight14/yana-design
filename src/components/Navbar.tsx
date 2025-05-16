
import React from 'react';
import { AppWindow } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="rounded-md bg-purple-100 p-2">
                <AppWindow className="h-6 w-6 text-purple-700" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-amber-700 bg-clip-text text-transparent">
                Origins
              </span>
            </a>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              BLOG
            </a>
            <a href="#" className="text-sm font-medium relative text-purple-700 hover:text-purple-900 font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-amber-500 after:content-['']">
              LOYALTY PROGRAM
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
