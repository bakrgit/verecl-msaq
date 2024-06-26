"use client";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-12 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center md:w-4/12 md:items-start md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">FinBiz</h2>
            <p className="mt-2 text-center text-gray-700 dark:text-gray-300 md:text-start">
              Data analysis software is a type of software tool used for data analysis and reporting.
            </p>
            <div className="mt-4 flex">
              <a
                href="#"
                className="me-2 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-black hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-blue-500"
              >
                <FaTwitter className="mx-2 h-6 w-6" />
              </a>
              <a
                href="#"
                className="mx-2 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-black hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-blue-500"
              >
                <FaFacebookF className=" mx-2 h-6 w-6" />
              </a>
              <a
                href="#"
                className="mx-2 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-black hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-blue-500"
              >
                <FaInstagram className=" mx-2 h-6 w-6" />
              </a>
              <a
                href="#"
                className="mx-2 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-black hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-blue-500"
              >
                <FaGithub className=" mx-2 h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6 md:w-4/12 md:flex-row md:justify-between md:space-x-12 md:space-y-0">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="font-semibold text-gray-900 dark:text-white">Company</h3>
              <Link
                href="/"
                className="mt-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Service
              </Link>
              <Link
                href="/"
                className="mt-1 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Resources
              </Link>
              <Link
                href="/"
                className="mt-1 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                About us
              </Link>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="font-semibold text-gray-900 dark:text-white">Help</h3>
              <Link
                href="/"
                className="mt-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Customer Support
              </Link>
              <Link
                href="/"
                className="mt-1 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/"
                className="mt-1 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center text-center md:w-4/12 md:items-end md:text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white">Subscribe to Newsletter</h3>
            <div
              className="mt-4 flex w-full max-w-sm overflow-hidden border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800"
              style={{ borderRadius: "8px" }}
            >
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-grow border-none bg-transparent px-4 py-2 text-gray-700 focus:outline-none dark:text-gray-300"
                style={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}
              />
              <button
                type="submit"
                className="bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none"
                style={{ borderTopRightRadius: "8px", borderBottomRightRadius: "8px", width: "140px" }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-700 dark:border-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} FinBiz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
