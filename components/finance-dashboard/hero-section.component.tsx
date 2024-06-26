"use client";
import { AiOutlineArrowRight } from "react-icons/ai"; // Import the right arrow icon
import Image from "next/image";
import img1 from "@/public/hero-image/person-1.png";
import img2 from "@/public/hero-image/person-2.png";
import img3 from "@/public/hero-image/person-3.png";
import img4 from "@/public/hero-image/person-4.png";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-[#1D1C20]">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 inline-flex items-center rounded-full border-l border-r border-t border-[#364C09] bg-white  dark:border-2 dark:border-[#364C09]">
            <button className="m-1 rounded-full bg-green-500 px-4 py-2 text-white">New</button>
            <span
              className="flex items-center px-4 text-black dark:text-green-500"
              style={{ height: "33px" }}
            >
              Introducing AI Automation
            </span>
            <span className="flex items-center px-4 text-green-500">
              <AiOutlineArrowRight />
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-bold text-black dark:text-white md:text-6xl lg:text-7xl">
            The Finance Solutions For Your Business
          </h1>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Empower your finance team. The one-stop platform for all financial management of small and medium-sized
            businesses.
          </p>
          <div
            className="mx-auto flex w-full max-w-4xl items-center justify-center overflow-hidden rounded-full border border-black bg-white dark:border-gray-800 dark:bg-gray-700"
            style={{ height: "60px", maxWidth: "650px" }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-full flex-grow rounded-l-full border-none bg-transparent px-4 py-2 text-gray-700 focus:outline-none dark:text-gray-200"
              style={{ paddingLeft: "15px" }}
            />
            <button
              className="m-1  rounded-full bg-black px-5 py-2 text-white dark:bg-white dark:text-black"
              style={{ minWidth: "160px", height: "55px" }}
            >
              Book a Demo
            </button>
          </div>
          <div className="relative mt-6 flex flex-col items-center justify-center">
            <div className="relative flex h-12 w-48  px-[20px]">
              <Image
                className="absolute left-0 top-0 h-12 w-12 rounded-full ring-2 ring-white"
                src={img1}
                alt="Reviewer 1"
                width={48}
                height={48}
                style={{ transform: "translateX(0%)" }}
              />
              <Image
                className="absolute left-0 top-0 h-12 w-12 rounded-full ring-2 ring-white"
                src={img2}
                alt="Reviewer 2"
                width={48}
                height={48}
                style={{ transform: "translateX(70%)" }}
              />
              <Image
                className="absolute left-0 top-0 h-12 w-12 rounded-full ring-2 ring-white"
                src={img3}
                alt="Reviewer 3"
                width={48}
                height={48}
                style={{ transform: "translateX(135%)" }}
              />
              <Image
                className="absolute left-0 top-0 h-12 w-12 rounded-full ring-2 ring-white"
                src={img4}
                alt="Reviewer 4"
                width={48}
                height={48}
                style={{ transform: "translateX(200%)" }}
              />
            </div>
            <p className="ml-4 mt-4 text-lg font-semibold text-[#828282] dark:text-[#9B9CA1]">
              1,200+ reviews (4.9 of 5)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
