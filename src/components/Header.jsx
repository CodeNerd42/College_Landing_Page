// src/components/Header.jsx
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative bg-[#00008B] bg-opacity-90">
      <div className="flex justify-between items-center py-4 px-8">
        <NavLink to="/">
          <img
            src="/download.png"
            alt="IET Logo"
            className="h-10 w-20"
          />
        </NavLink>

        <nav className="hidden md:flex space-x-6">
          {/* Home */}
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-white relative group"
                : "text-[#6495ED] relative group"
            }
          >
            Home
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </NavLink>

          {/* About Us */}
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "text-white relative group"
                : "text-white relative group"
            }
          >
            About Us
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </NavLink>

          {/* Contact */}
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "text-white relative group"
                : "text-white relative group"
            }
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </NavLink>
        </nav>

        <NavLink 
          to="/contact" 
          className="bg-white text-[#6495ED] px-6 py-2 rounded-full hover:bg-[#D6E3FA] transition-colors duration-300"
        >
          SignUp
        </NavLink>
      </div>
    </header>
  );
};

export default Header;