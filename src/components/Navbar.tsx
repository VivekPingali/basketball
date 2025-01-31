import React, { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navItems = ['Home', 'Shop', 'Team', 'About', 'Contact'];

  return (
    <nav className="fixed w-full bg-navy-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 text-white font-bold text-2xl">
            HOOPS™
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;