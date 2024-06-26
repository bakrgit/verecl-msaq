"use client";

import React, { useState, useEffect, useRef } from "react";
import { Fa0 } from "react-icons/fa6";
import Footer from "@/components/finance-dashboard/footer.component";
import Features from "@/components/finance-dashboard/feature.component";

const CenteredMenu = () => {
  const targetRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [initialTop, setInitialTop] = useState(0);

  const handleScroll = () => {
    if (targetRef.current) {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop >= initialTop);
    }
  };

  useEffect(() => {
    if (targetRef.current) {
      // @ts-ignore
      setInitialTop(targetRef.current.offsetTop);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialTop]);
  return (
    <div
      className="relative  flex   justify-center bg-[#F6F6F6] pb-32 pt-10 dark:bg-[#0F0F0F]"
      style={{ height: "100%" }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          borderRadius: "1236px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(163, 220, 47, 0.50) 0%, rgba(255, 255, 255, 0.00) 100%)",
          filter: "blur(32.650001525878906px)"
        }}
      ></div>
      <div
        ref={targetRef}
        id="menu"
        className={`relative flex space-x-10 p-1 shadow-lg backdrop-blur-lg ${
          isSticky ? "sticky  top-0 mx-auto  " : ""
        }`}
        style={{
          borderRadius: "48px",
          borderImage: "linear-gradient(to right, #FFF, #A3DC2F) 1",
          borderImageSlice: 1,
          background: "rgba(255, 255, 255, 0.20)",
          backdropFilter: "blur(32.650001525878906px)",
          height: "60px",
          borderStyle: "solid",
          zIndex: 1000,
          transition: "top 0.3s ease-in-out"
        }}
      >
        <div className="flex space-x-10 rounded-full py-2 ps-8">
          <a
            href="#"
            className="mx-2 mt-1 font-medium text-black hover:text-green-700 dark:text-white dark:hover:text-gray-700"
            style={{ fontSize: "18px", fontStyle: "normal", fontWeight: "500" }}
          >
            Product
          </a>
          <a
            href="#"
            className="mx-2 mb-2 mt-1 font-medium text-black hover:text-green-700 dark:text-white dark:hover:text-gray-700"
            style={{ fontSize: "18px", fontStyle: "normal", fontWeight: "500" }}
          >
            Integration
          </a>
          <a
            href="#"
            className="mx-2 mt-1 font-medium text-black hover:text-green-700 dark:text-white dark:hover:text-gray-700"
            style={{ fontSize: "18px", fontStyle: "normal", fontWeight: "500" }}
          >
            Demo
          </a>
          <a
            href="#"
            className="mx-2 mt-1 font-medium text-black hover:text-green-700 dark:text-white dark:hover:text-gray-700"
            style={{ fontSize: "18px", fontStyle: "normal", fontWeight: "500" }}
          >
            Pricing
          </a>
          <a
            href="#"
            className="-mt-2 rounded-full bg-white px-6 py-2 font-medium text-black dark:hover:text-green-700"
            style={{ fontSize: "18px", fontStyle: "normal", fontWeight: "500", height: "48px", paddingTop: "9px" }}
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default CenteredMenu;
