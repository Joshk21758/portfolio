import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  HandHelping,
  HandHelpingIcon,
  ComputerIcon,
  Hand,
  Gpu,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // adjust for header height
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ?
          "bg-white/80 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-custom font-extrabold flex flex-row tracking-tighter text-slate-900"
          onClick={(e) => scrollToSection(e, "#root")}
        >
          Hi, I'm Mwansa
          <Gpu className="ml-2 w-7 h-7" color="gray" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-lg font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-blue-600 font-custom font-bold transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-slate-400"></div>
          <div className="flex items-center gap-4 text-gray-500">
            <a
              href="https://github.com/Joshk21758"
              className="hover:text-blue-600 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mwansa-kunda-0bbb6540a"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ?
            <X size={24} />
          : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-6 px-6 md:hidden flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 text-gray-500 pt-4 border-t border-gray-200">
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
