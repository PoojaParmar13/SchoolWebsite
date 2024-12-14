import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos.png';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import ThemeToggleButton from './ThemeToggleButton'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text px-2 py-1 flex items-center justify-between fixed top-0 left-0 w-full z-50 border-b-4 border-black dark:border-white">
      {/* Logo */}
      <div className="flex items-center pl-4">
        <img src={logo} alt="Springdale Public School Logo" className="h-12 md:h-16 pl-1 mr-2" />
      </div>

      {/* Navigation Links */}
      <ul 
        className={`md:flex md:space-x-5 absolute md:relative top-[3.7rem] right-0 bg-light-background dark:bg-dark-background w-full md:w-auto transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0 border-b-2 border-black dark:border-white' : 'translate-x-full'} md:translate-x-0 md:top-auto md:pt-0 md:pb-0 pt-4 pl-8 pb-4`}
      >
        <li><Link to="/" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Home</Link></li>
        <li><Link to="/about" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">About Us</Link></li>
        <li><Link to="/academic" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Academics</Link></li>
        <li><Link to="/admission" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Admissions</Link></li>
        <li><Link to="/faculty" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Faculty</Link></li>
        <li><Link to="/student" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Students</Link></li>
        <li><Link to="/gallery" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Gallery</Link></li>
        <li><Link to="/contact" className="block md:inline text-light-text dark:text-dark-text font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Contact Us</Link></li>
      </ul>

      {/* Theme Toggle Button */}
      <div className=" md:flex md:items-center ml-auto md:mr-8 mr-4">
        <button 
          className="text-black dark:text-white border-none outline-none bg-transparent p-0"
          aria-label="Toggle theme"
        >
          <ThemeToggleButton />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMobileMenu} 
          className="text-black dark:text-white text-2xl border-none outline-none bg-transparent p-0"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Apply Now Button */}
      <div className="hidden md:block">
        <Link to="/apply" className=" text-dark-text dark:text-light-text bg-dark-background dark:bg-light-background font-semibold px-4 py-1 rounded text-[1.1rem] hover:bg-blue-900 hover:underline">Apply Now</Link>
      </div>

    </nav>
  );
};

export default Header;
