import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Book Now', id: 'booking' }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const closeMobileNav = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 h-20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/10 backdrop-blur-md'
      } border-b border-white/10`}>
        <nav className="container mx-auto px-10 flex justify-between items-center h-full">
          <button onClick={() => handleNavClick('home')} className="flex items-center">
            <img 
              src="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4JlKfv0vwxuA6kweajo08PZhBg5XrVqWYxmJDQM" 
              alt="Muscle Remedy Co. Logo" 
              className="h-24 w-auto transition-transform hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex list-none gap-12 items-center">
            {navigation.slice(0, -1).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-900 no-underline font-medium text-sm transition-colors hover:text-sky-400 uppercase tracking-wider"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://www.halaxy.com/book/appointment/muscle-remedy-co/location/1324413"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-gray-900 text-white px-7 py-3.5 font-semibold text-xs uppercase tracking-wider transition-all border-2 border-gray-900 hover:bg-white hover:text-gray-900"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-gray-900" />
            ) : (
              <Menu size={28} className="text-gray-900" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-50 lg:hidden">
          <div className="h-full flex flex-col p-10">
            <div className="flex justify-between items-center mb-15">
              <img 
                src="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4JlKfv0vwxuA6kweajo08PZhBg5XrVqWYxmJDQM" 
                alt="Muscle Remedy Co. Logo" 
                className="h-24 w-auto"
              />
              <button onClick={closeMobileNav}>
                <X size={40} className="text-white" />
              </button>
            </div>
            
            <ul className="list-none p-0 m-0 flex-1 flex flex-col justify-center gap-8">
              {navigation.map((item) => (
                <li key={item.id}>
                  {item.id === 'booking' ? (
                    <a
                      href="https://www.halaxy.com/book/appointment/muscle-remedy-co/location/1324413"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-400 text-white px-8 text-center font-semibold text-base uppercase tracking-wider border-none mt-8 hover:bg-white hover:text-gray-900 hover:translate-x-0 text-white no-underline text-2xl font-light transition-all py-4 w-full block"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="text-white no-underline text-2xl font-light transition-all py-4 border-b border-white/10 w-full text-left hover:text-sky-400 hover:translate-x-4"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;