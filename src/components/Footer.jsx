import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="relative pt-10 pb-2 overflow-hidden">
        {/* Background updated */}
        <div className="absolute inset-0 w-auto h-full z-0">
          <img 
            src="/istockphoto-938484386-612x612.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="container mx-auto px-4 relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
            {/* Logo and description section */}
            <div className="lg:col-span-1">
              <img 
                src="/download.png" 
                alt="EatoPae Logo" 
                className="h-12 mb-6"
              />
              <p className="text-gray-600 mb-6">
                College-O-Mania is a comprehensive university management platform that helps streamline operations, enhance user experience, and boost teaching methods.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-[#6495ED] text-3xl flex items-center justify-center">
                    <FaInstagram />
                </a>
                <a href="#" className="text-[#6495ED] text-3xl flex items-center justify-center">
                    <FaLinkedin />
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl text-[#6495ED] font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#000000] hover:text-[#6495ED] transition-colors duration-300">Home</a></li>
                <li><a href="#" className="text-[#000000] hover:text-[#6495ED] transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-[#000000] hover:text-[#6495ED] transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-[#000000] hover:text-[#6495ED] transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl text-[#6495ED] font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#6495ED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-[#6495ED] transition-colors duration-300">9876543210</a>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#6495ED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:info@eatopae.com" className="text-gray-600 hover:text-[#6495ED] transition-colors duration-300">contactus@ietlucknow.in</a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="p-4 mt-12 bg-[#6495ED]">
            <div className="text-center text-white">
              <p>&copy; {new Date().getFullYear()} College-O-Mania. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;