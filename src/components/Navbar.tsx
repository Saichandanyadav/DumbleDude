"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Results", id: "results" },
    { name: "Schedule", id: "schedule" },
    { name: "Trainers", id: "trainers" },
    { name: "Pricing", id: "membership" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src="/logo.png"
              alt="DumbleDude Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="font-display text-xl md:text-2xl font-bold tracking-tighter uppercase text-white">
            Dumble<span className="text-[#a3e635]">Dude</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-[#a3e635] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#membership"
            className="bg-[#a3e635] text-black px-5 py-2.5 rounded font-bold hover:bg-white transition-all uppercase text-xs"
          >
            Join Now
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#09090b] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xl font-display uppercase text-white tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#membership"
            onClick={() => setIsOpen(false)}
            className="bg-[#a3e635] text-black px-5 py-4 rounded font-bold uppercase text-center text-sm mt-2"
          >
            Join Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;