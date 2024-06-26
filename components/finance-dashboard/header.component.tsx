"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/contextes/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setShowSubmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <header className="bg-white shadow-md dark:bg-black">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link
          href={"/"}
          className="text-xl font-bold text-black dark:text-white"
        >
          FinBiz
        </Link>
        <nav className="hidden space-x-4 text-black dark:text-white md:flex">
          <Link
            href="/features"
            className="m-2 p-2"
          >
            Features
          </Link>
          <div
            className="relative"
            ref={submenuRef}
          >
            <button
              className="m-2 flex items-center p-2"
              onClick={() => setShowSubmenu(!showSubmenu)}
            >
              Pricing
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${showSubmenu ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {showSubmenu && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg dark:bg-gray-800">
                <Link
                  href="/pricing/basic"
                  className="block px-4 py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Basic
                </Link>
                <Link
                  href="/pricing/pro"
                  className="block px-4 py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Pro
                </Link>
                <Link
                  href="/pricing/enterprise"
                  className="block px-4 py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Enterprise
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/blog"
            className="m-2 p-2"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="m-2 p-2"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <button
            className="mr-4 mt-1 flex h-9 w-9 items-center justify-center"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <CiLight className="h-9 w-9 text-black" />
            ) : (
              <MdLightMode className="h-9 w-9 text-white" />
            )}
          </button>
          <button className="mr-2.5 rounded-full border-l border-r border-t border-black bg-white px-6 py-2 text-black hover:bg-gray-100 dark:border-[#3B3B3B] dark:bg-black dark:text-white dark:hover:bg-gray-800">
            Get Started
          </button>
          <button
            className="flex items-center md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <AiOutlineClose className="h-6 w-6 text-black dark:text-white" />
            ) : (
              <AiOutlineMenu className="h-6 w-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="bg-white dark:bg-gray-900 md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 text-black dark:text-white">
            <Link
              href="/features"
              className="p-2"
            >
              Features
            </Link>
            <div
              className="relative"
              ref={submenuRef}
            >
              <button
                className="flex items-center p-2"
                onClick={() => setShowSubmenu(!showSubmenu)}
              >
                Pricing
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${showSubmenu ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {showSubmenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg dark:bg-gray-800">
                  <Link
                    href="/pricing/basic"
                    className="block px-4 py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Basic
                  </Link>
                  <Link
                    href="/pricing/pro"
                    className="block px-4 py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Pro
                  </Link>
                  <Link
                    href="/pricing/enterprise"
                    className="block px-4 py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Enterprise
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="p-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="p-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
