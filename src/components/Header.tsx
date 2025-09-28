import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaFacebook, FaInstagram, FaYoutube, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && 
          buttonRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  // Define hover styles based on scroll state
  const getLinkHoverStyles = () => {
    if (isHomePage && !isScrolled) {
      // Not scrolled on homepage - white hover
      return "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]";
    } else {
      // Scrolled or not homepage - brown hover
      return "hover:text-[#8B4513] hover:drop-shadow-[0_0_5px_rgba(139,69,19,0.3)]";
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md text-gray-800'
            : 'bg-transparent text-white'
          : 'bg-white/95 backdrop-blur-md shadow-md text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/navlogo.png"
                alt="One Minute Grace Logo"
                width={40}
                height={40}
                className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)] transition-all duration-300"
              />
            </div>
            <Link 
              href="/" 
              className={`text-2xl font-playfair font-bold z-10 relative transition-all duration-300 ${getLinkHoverStyles()}`}
            >
              One Minute Grace
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li>
                <Link 
                  href="/" 
                  className={`transition-all duration-300 ${getLinkHoverStyles()}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`transition-all duration-300 ${getLinkHoverStyles()}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`transition-all duration-300 ${getLinkHoverStyles()}`}
                >
                  Contact
                </Link>
              </li>
              <li className="ml-4 flex space-x-4">
                <a
                  href="https://facebook.com/1minutegrace" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 ${getLinkHoverStyles()}`}
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://instagram.com/oneminutegrace" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 ${getLinkHoverStyles()}`}
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@OneMinuteGrace" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 ${getLinkHoverStyles()}`}
                  aria-label="YouTube"
                >
                  <FaYoutube size={20} />
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="relative md:hidden">
            <button
              ref={buttonRef}
              className={`text-2xl z-10 transition-all duration-300 flex items-center justify-center ${getLinkHoverStyles()}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div 
                ref={menuRef}
                className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-xl py-2 z-20 animate-fadeIn"
              >
                <div className="py-2 px-4 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-400">Navigation</span>
                </div>
                <Link
                  href="/"
                  className="block py-3 px-4 hover:bg-gray-50 text-gray-800 hover:text-[#8B4513]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 hover:bg-gray-50 text-gray-800 hover:text-[#8B4513]"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 px-4 hover:bg-gray-50 text-gray-800 hover:text-[#8B4513]"
                >
                  Contact
                </Link>
                <div className="py-2 px-4 border-t border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-400">Social</span>
                </div>
                <div className="flex justify-around py-3 px-4">
                  <a
                    href="https://facebook.com/1minutegrace" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#8B4513]"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com/oneminutegrace" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#8B4513]"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://youtube.com/@OneMinuteGrace" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#8B4513]"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 