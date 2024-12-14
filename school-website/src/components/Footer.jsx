import { useEffect } from 'react';
import logo from '../assets/logos.png';

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gray-800 text-white">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-16 py-8 gap-12">
        {/* School Info */}
        <div className="space-y-2 flex flex-col items-center md:items-start">
          <img src={logo} alt="School Logo" className="w-24 h-24 py-2 -mx-2 -mt-5 -mb-3" />
          <p className="text-[1.2rem] px-2 shadow-lg shadow-blue-300 text-center md:text-left">Springdale Public School</p>
          <p className="text-center md:text-left">+1 (123) 456-7890</p>
          <p className="text-center md:text-left">123 Education Lane, Cityville, State, ZIP Code</p>
          <p className="text-center md:text-left">info@springdale.edu</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 pl-4">
          <h5 className="text-lg font-semibold">Quick Links</h5>
          <ul className="space-y-2">
            <li><a href="/" className="text-blue-400 hover:underline">About Us</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Update News</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Testimonials</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Terms Of Service</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Privacy Policy</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Our Dealers</a></li>
          </ul>
        </div>

        {/* Support Center */}
        <div className="space-y-4 pl-4">
          <h5 className="text-lg font-semibold">Support Center</h5>
          <ul className="space-y-2">
            <li><a href="/" className="text-blue-400 hover:underline">FAQ`s</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Affiliates</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Booking Tips</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Sell Vehicles</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Contact Us</a></li>
            <li><a href="/" className="text-blue-400 hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 pl-4">
          <h5 className="text-lg font-semibold">Newsletter</h5>
          <p className="text-blue-400 hover:underline">Subscribe to our newsletter for the latest updates.</p>
          <input type="text" placeholder="Your Email" className="w-60 md:w-full px-3 py-2 bg-white text-gray-800 rounded" />
          <button className="w-60 mt-3 py-2 md:w-full bg-blue-700 text-white rounded hover:bg-blue-500">Subscribe Now</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-white py-2 px-4 md:px-16 text-left relative">
        <p className="text-center pr-20 pl-2 md:text-left">Copyright &copy; 2023 <span className="text-blue-500">Springdale Public School.</span> All Rights Reserved.</p>
        
        {/* Scroll To Top Button */}
        <button onClick={scrollToTop} className="absolute bottom-4 md:bottom-1 right-2 bg-gray-800 shadow-blue-300 text-white px-2 py-0.5 rounded-full shadow-inner hover:bg-blue-700 transition-all">
          &#9650;
        </button>
      </div>
    </div>
  );
};

export default Footer;
