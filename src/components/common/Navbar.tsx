import logo from '../../assets/logos.jpg';
import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/Services",
  },
  {
    id: 3,
    title: "About Us",
    path: "/about",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
  },
  {
    id: 5,
    title: "Shop",
    path: "/Shop",
  },
  {
    id: 6,
    title: "Profile",
    path: "/Profile",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 bg-[#f2a229]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto py-6 px-4 flex justify-between items-center"
      >
        <div className="flex items-center">
          <img src={logo} alt="Bigfoot Dance Arena Logo" className="h-16 mr-3" />
          <h1 className="font-['Russo_One'] text-lg md:text-xl lg:text-2xl tracking-wider text-white drop-shadow-lg">
            BIGFOOT DANCE ARENA
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-bold font-['Poppins']">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group"
                >
                  {menu.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
            <Link
              to="/signin"
              className="ml-4 bg-white text-[#f2a229] px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors duration-300 shadow-lg"
            >
              Sign In
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMenuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-[#f2a229] lg:hidden shadow-lg"
            >
              <ul className="py-4 px-6 space-y-3 text-sm font-bold font-['Poppins']">
                {NavbarMenu.map((menu) => (
                  <motion.li
                    key={menu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menu.id * 0.1 }}
                  >
                    <Link
                      to={menu.path}
                      className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menu.title}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/signin"
                    className="block py-2 px-4 bg-white text-[#f2a229] rounded-lg text-center font-semibold hover:bg-white/90 transition-colors duration-300 shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
