"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E2A4F]/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link href="#" className="flex items-center group">
          <Image
            src="/logo-horizontal.svg"
            alt="NordWeb Logo"
            width={180}
            height={55}
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["Accueil", "Services", "Avantages", "Portfolio", "Témoignages", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace("é", "e").replace("à", "a")}`}
                className="nav-link text-sm font-semibold text-gray-200 transition-colors hover:text-[#F97316] relative group"
              >
                {item}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-[#FCA04A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-[#091E30] border-b border-white/5 shadow-xl transition-all duration-300 overflow-hidden md:hidden flex flex-col items-center gap-6 py-8 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {["Accueil", "Services", "Avantages", "Portfolio", "Témoignages", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace("é", "e").replace("à", "a")}`}
              className="text-lg font-semibold text-gray-200 hover:text-[#F97316] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
