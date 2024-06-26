"use client";

import React from "react";
import Image from "next/image";
import demoImage from "@/public/feature/demoImage.png";

const WatchDemo = () => {
  return (
    <section className="bg-[#F2F2F2] py-20 dark:bg-[#0F0F0F]">
      <div className="container mx-auto overflow-hidden px-4">
        <div className="max-w-full rounded-[40px] bg-white p-8 dark:bg-[#1D1C20]">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <h2
                className="mb-6 text-[48px] font-bold text-[#1D1C20] dark:text-white md:text-[60px] lg:text-[72px]"
                style={{ fontFamily: "DM Sans" }}
              >
                Let’s Upgrade your finances experience by using FinBiz
              </h2>
              <div className="flex flex-wrap gap-4">
                <button
                  className="rounded-full bg-[#A3DC2F] text-white dark:bg-[#A3DC2F] dark:text-black"
                  style={{
                    width: "240px",
                    height: "60px",
                    flexShrink: 0,
                    borderRadius: "100px"
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="rounded-full bg-[#1D1C20] text-white dark:bg-white dark:text-black"
                  style={{
                    width: "240px",
                    height: "60px",
                    flexShrink: 0,
                    borderRadius: "100px"
                  }}
                >
                  Watch Video
                </button>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center lg:col-span-5 lg:mt-0">
              <Image
                src={demoImage}
                alt="Demo Image"
                className="rounded-lg"
                width={600}
                height={400}
                objectFit="cover"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchDemo;
