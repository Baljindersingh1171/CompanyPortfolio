import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

import spineorlogo from "../assets/images/spineorlogo.jpg";

const Header = ({ isDark, setIsDark }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-900 border-b border-gray-700" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={spineorlogo} alt="spineor" className="max-w-[100px]"/>
         

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["home", "about", "services", "work"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize font-medium transition-colors border-b-2 border-transparent hover:border-[#194a89] hover:text-[#194a89] text-base sm:text-lg md:text-xl`}
              >
                {item}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg  transition-colors"
              
            >
              {isDark ? <Sun size={20} color="white" /> : <Moon size={20} className="hover:text-[#194a89]" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg  transition-colors"
           
            >
              {isDark ? <Sun size={20} color={isDark ? "white" : "black"}  /> : <Moon size={20}  color={isDark ? "white" : "black"} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            
            >
              {isMenuOpen ? <X size={24} color={isDark ? "white" : "black"}   /> : <Menu size={24} color={isDark ? "white" : "black"} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t ${
            isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white "
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["home", "about", "services", "work"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md capitalize font-medium dark:hover:bg-gray-700 transition-colors border-b-2 border-transparent hover:border-[#194a89] text-base sm:text-lg md:text-xl"
               
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

export default Header;