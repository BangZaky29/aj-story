import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              AJ STORY
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Turning Love Stories into Timeless Memories. Creating unforgettable wedding experiences with elegance, precision, and heartfelt emotion.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('packages')}
                  className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                >
                  Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>{contactInfo.whatsapp}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Instagram size={16} className="mt-1 flex-shrink-0" />
                <span>{contactInfo.instagram}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AJ STORY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;