"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky ? "shadow-lg bg-white dark:bg-gray-600 py-4" : "shadow-none py-8 bg-white dark:bg-gray-800"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* This is the hamburger button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg z-50"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 flex flex-col items-end justify-center">
                <span className={`bg-gray-800 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navbarOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-800 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${navbarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-800 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navbarOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Overlay for mobile menu */}
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}
        
        {/* Mobile menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4 mt-8">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              <Logo />
            </h2>
          </div>
          <nav className="flex flex-col items-start p-4 mt-4">
            {headerData.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="py-4 text-gray-800 dark:text-white hover:text-primary w-full text-lg font-medium border-b border-gray-200 dark:border-gray-700"
                onClick={() => setNavbarOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 w-full">
              <p className="text-gray-800 dark:text-white text-lg font-medium py-4">
                Cleaning and Service Technician Application
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
