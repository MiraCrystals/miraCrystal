// Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles, ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = ["Home", "Products", "Founder", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}>
          <img
            src="/h.jpg"
            alt="Logo"
            className="h-10 opacity-50 w-10 bg-transparent"
          />
          <span className="font-serif text-2xl font-bold text-sage-800">
            Mira Crystals
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sage-700 hover:text-sage-900 font-medium transition">
              {item}
            </button>
          ))}
          <Link
            to="/admin"
            className="text-sage-700 hover:text-sage-900 font-medium transition">
            Admin
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-sage-700 hover:text-sage-900" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 text-xs bg-gold-500 text-white px-2 py-0.5 rounded-full shadow">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full py-2 text-left text-sage-700">
              {item}
            </button>
          ))}
          <Link
            to="/cart"
            className="flex items-center gap-2 mt-2 text-sage-700">
            <ShoppingCart className="w-5 h-5" />
            Cart ({cart.length})
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
