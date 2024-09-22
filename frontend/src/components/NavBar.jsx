import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, TicketCheck, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#011936] text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-100 transition-colors duration-200 flex justify-center items-center gap-2 logo"
        >
          <lord-icon
            src="https://cdn.lordicon.com/gyblqrqz.json"
            trigger="hover"
            target=".logo"
            colors="primary:#fef9c3"
            style={{ width: 25, height: 25 }}
          ></lord-icon>
          TixFlow
        </Link>
        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="text-lg font-semibold transition-all duration-400">
              {menuOpen ? <X /> : <Menu className="text-yellow-100" />}
            </span>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-[#011936] rounded-lg shadow-lg z-50">
              <Link
                onClick={toggleMenu}
                to="/"
                className="block px-4 py-2  rounded-t-lg hover:bg-yellow-100"
              >
                Home
              </Link>
              <Link
                to="/create"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-yellow-100"
              >
                Create
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-yellow-100"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block px-4 py-2 rounded-b-lg hover:bg-yellow-100"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
