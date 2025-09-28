import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-playfair mb-6 bg-gradient-to-r from-[#8B4513] to-[#654321] bg-clip-text text-transparent">One Minute Grace</h3>
          <p className="mb-6 text-gray-300 leading-relaxed max-w-2xl">
            Spreading faith, hope, and love through daily spiritual inspiration. Join us on this journey of spiritual growth and discovery.
          </p>
          <div className="flex space-x-8 mb-8">
            <a 
              href="https://facebook.com/1minutegrace" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            <a 
              href="https://instagram.com/oneminutegrace" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a 
              href="https://youtube.com/@OneMinuteGrace" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={28} />
            </a>
            <a 
              href="mailto:valianayil@gmail.com" 
              className="text-white hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
          
          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center space-x-8">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} One Minute Grace. Made with <FaHeart className="inline text-red-500 mx-1" size={12} /> and faith by{' '}
              <a
                href="https:gebin.net" // Replace with your actual portfolio URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 underline transition-all duration-300"
              >
                Gebin George
              </a>.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 