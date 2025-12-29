import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                AJ STORY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-rose-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-rose-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-rose-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-rose-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              PACKAGES
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-rose-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              CONTACT
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 transition-all duration-300"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 text-sm font-medium tracking-wider hover:text-rose-400 text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 text-sm font-medium tracking-wider hover:text-rose-400 text-left"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 text-sm font-medium tracking-wider hover:text-rose-400 text-left"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-gray-700 text-sm font-medium tracking-wider hover:text-rose-400 text-left"
              >
                PACKAGES
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 text-sm font-medium tracking-wider hover:text-rose-400 text-left"
              >
                CONTACT
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-rose-400 hover:bg-rose-500 text-white w-full"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;