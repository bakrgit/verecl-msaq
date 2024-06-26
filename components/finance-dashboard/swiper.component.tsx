"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import per1 from "@/public/slider/per1.png";
import icon from "@/public/slider/icon.png";
import per3 from "@/public/slider/per3.png";
import per2 from "@/public/slider/per2.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SwiperComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev"
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          400: { slidesPerView: 1 },
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              I really like the system at this management, I love recommending this software to you guys.
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per1}
                  alt="Client 1"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★★★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              I really like the system at this management, I love recommending this software to you guys.
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per3}
                  alt="Client 3"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★★★★★</p>
                </div>
              </div>
              <div className="right-2 mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              This software has significantly improved our workflow and productivity. Highly recommend!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per2}
                  alt="Client 4"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              Exceptional customer service and user-friendly interface. A game-changer for our business!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per3}
                  alt="Client 5"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★★★★★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              This software has significantly improved our workflow and productivity. Highly recommend!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per2}
                  alt="Client 4"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              This software has significantly improved our workflow and productivity. Highly recommend!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per2}
                  alt="Client 4"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              This software has significantly improved our workflow and productivity. Highly recommend!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per2}
                  alt="Client 4"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              This software has significantly improved our workflow and productivity. Highly recommend!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per2}
                  alt="Client 4"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              This software has significantly improved our workflow and productivity. Highly recommend!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per2}
                  alt="Client 4"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">
              This software has significantly improved our workflow and productivity. Highly recommend!
            </p>
            <div className="flex justify-between">
              <div className="mt-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={per2}
                  alt="Client 4"
                  width={60}
                  height={60}
                />
                <div className="mx-2 ml-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Client Name</p>
                  <p className="text-start text-sm text-yellow-500">★</p>
                </div>
              </div>
              <div className="mt-2 flex text-gray-300 dark:text-gray-600">
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  src={icon}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex w-full justify-center bg-pink-400">
        <div
          className="custom-swiper-button-next absolute z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#A3DC2F]  shadow-md"
          style={{ marginLeft: 80, top: 440 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className="custom-swiper-button-prev absolute  z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-md dark:bg-[#222629]"
          style={{ marginRight: 80, top: 440 }}
        >
          <svg
            className="dark:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5"
              stroke="#1D1C20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="#1D1C20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="hidden dark:block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
