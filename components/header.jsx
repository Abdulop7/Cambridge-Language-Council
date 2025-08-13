"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Mail, Phone, Globe, FileText, Clock, Contact } from "lucide-react";
import logo from "../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    clearTimeout(closeTimer);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setActiveDropdown(null), 150);
    setCloseTimer(timer);
  };

  // Mobile dropdown toggle
  const toggleMobileDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
    <AnimatePresence>
  {!scrolled && (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0 }}
      className="hidden lg:flex bg-gray-800 text-white text-sm py-2 px-6 items-center justify-between"
    >
      {/* Left Section */}
      <div className="flex justify-center items-center gap-6 w-full xl:text-lg text-sm">
        <div className="flex items-center gap-2">
          <Clock size={20} />
          <span>Mon - Fri: 8AM to 8PM</span>
        </div>
        <div className="flex items-center gap-2">
          <Contact size={20} />
          <span>Contact Us</span>
        </div>

        <div className="flex items-center gap-2">
          <FileText size={20} />
          <span>Apply Now</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone size={20} />
          <span>1-866-748-9780</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <span>info@clcconsultants.org</span>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    <nav
      className={`fixed md:p-6  p-4 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link className="aspect-square h-full relative hover:scale-120 transition duration-300" href="/">
          <Image src={logo} fill alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center space-x-6 font-medium ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-red-600 transition-all after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
            >
              Home
            </Link>
          </li>

          {/* Services */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-red-600 transition-all">
              Services <FiChevronDown className="ml-1" />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute left-0 top-full bg-white text-black rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                <div className="pt-2">
                  <a href="#visa" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    Visa Process
                  </a>
                  <a href="#ielts" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    IELTS
                  </a>
                  <a href="#pte" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    PTE
                  </a>
                  <a href="#spoken" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    Spoken English
                  </a>
                  <a href="#grammar" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    Grammar
                  </a>
                  <a href="#grammar" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    Admissions
                  </a>
                </div>
              </div>
            )}
          </li>

          {/* Study Abroad */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("study")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-red-600 transition-all">
              Study Abroad <FiChevronDown className="ml-1" />
            </button>
            {activeDropdown === "study" && (
              <div className="absolute left-0 top-full bg-white text-black rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                <div className="pt-2">
                  <a href="#australia" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    Australia
                  </a>
                  <a href="#uk" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    UK
                  </a>
                  <a href="#canada" className="block px-4 py-2 hover:text-white hover:bg-blue-800">
                    Canada
                  </a>
                </div>
              </div>
            )}
          </li>

          <li>
            <a
              href="#apply"
              className="hover:text-red-600 transition-all after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
            >
              Apply Now
            </a>
          </li>
          <li>
            <Link href="/faqs" className="hover:text-red-600 transition-all after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full">
              FAQs
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-600 transition-all after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              size={28}
              className="cursor-pointer text-blue-800"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              size={28}
              className="cursor-pointer text-blue-800"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-lg z-50 flex flex-col">
          {/* Top Bar inside overlay */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Image src={logo} height={60} width={60} alt="Logo" />
            <FiX
              size={28}
              className="cursor-pointer text-blue-800"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Menu Links */}
          <div className="p-6 flex flex-col gap-2 space-y-4 text-blue-800 font-medium overflow-y-auto">
            <Link className="" href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            {/* Mobile Dropdown Services */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2"
                onClick={() => toggleMobileDropdown("services")}
              >
                Services
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "services" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 flex flex-col space-y-2 mt-2 text-black">
                  <a href="#visa">Visa Process</a>
                  <a href="#ielts">IELTS</a>
                  <a href="#pte">PTE</a>
                  <a href="#spoken">Spoken English</a>
                  <a href="#grammar">Grammar and Admissions</a>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Study Abroad */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2"
                onClick={() => toggleMobileDropdown("study")}
              >
                Study Abroad
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    activeDropdown === "study" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "study" ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 flex flex-col space-y-2 mt-2 text-black">
                  <a href="#australia">Australia</a>
                  <a href="#uk">UK</a>
                  <a href="#canada">Canada</a>
                </div>
              </div>
            </div>

            <a href="#apply" onClick={() => setMenuOpen(false)}>
              Apply Now
            </a>
            <Link href="/faqs" onClick={() => setMenuOpen(false)}>
              FAQs
            </Link>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
