"use client";

import React from "react";
import Image from "next/image";
import graph1 from "@/public/feature/graph1.png";
import graph2 from "@/public/feature/graph2.png";
import avatar1 from "@/public/feature/avatar1.png";
import avatar2 from "@/public/feature/avatar2.png";
import avatar3 from "@/public/feature/avatar3.png";
import avatar4 from "@/public/feature/avatar4.png";
import avatar5 from "@/public/feature/avatar5.png";
import invoiceIcon from "@/public/feature/invoiceIcon.png";

const Features = () => {
  return (
    <section className="bg-[#F6F6F6] pb-10 pt-5 dark:bg-[#0F0F0F]">
      <div className="container mx-auto overflow-hidden px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12">
          <div
            className="flex flex-col items-center justify-center rounded-[30px] border border-gray-400 bg-white p-6 dark:border-gray-800 dark:bg-[#161616] lg:col-span-3"
            style={{ height: "470px" }}
          >
            <h3 className="mb-4 text-center text-lg font-medium text-gray-800 dark:text-white">Simple Analytics</h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Make informed decisions backed by data through our analytics tools.
            </p>
            <div className="relative mt-4 flex h-[290px] w-full items-center justify-center rounded-[12px] bg-[#F4F4F4] dark:bg-[#1A1A1A]">
              <div className="left-4 top-4 flex items-center space-x-2">
                <div className="absolute left-10 top-0 mx-10 mt-4 flex">
                  <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-black">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12l7-7 7 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="mx-2 mt-4 text-green-600">14.12%</span>
                </div>
              </div>
              <div className=" w-full">
                <Image
                  src={graph1}
                  alt={""}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center rounded-[30px] border border-gray-400 bg-white p-6 dark:border-gray-800 dark:bg-[#161616] lg:col-span-6"
            style={{ height: "470px" }}
          >
            <h3 className="mb-4 text-center text-lg font-medium text-gray-800 dark:text-white">Team Expenses</h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace
              of mind for you.
            </p>
            <div className="relative mt-4 flex h-[270px] w-full items-center justify-center rounded-[12px] bg-[#F4F4F4] dark:bg-[#1A1A1A]">
              <div className=" w-full">
                <Image
                  src={graph2}
                  alt={""}
                  fill
                  className=""
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center rounded-[30px] border border-gray-400 bg-white p-6 dark:border-gray-800 dark:bg-[#161616] lg:col-span-3"
            style={{ height: "470px" }}
          >
            <h3 className="mb-4 text-center text-lg font-medium text-gray-800 dark:text-white">Easy Collaboration</h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Seamlessly collaborate with your team members like never before.
            </p>
            <div className="relative mt-4 flex items-center justify-center">
              <div
                className="border-1 flex items-center justify-center rounded-full border-[#EDEDED] bg-[#EDEDED] dark:border-[#242424] dark:bg-[#242424]"
                style={{
                  width: "264px",
                  height: "264px"
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full bg-[#E5EADB] dark:bg-[#1A1A1A]"
                  style={{
                    width: "208px",
                    height: "208px"
                  }}
                >
                  <div className="relative flex h-12 w-48 px-[20px]">
                    <Image
                      className="absolute left-0 top-0 h-12 w-12 rounded-full"
                      src={avatar1}
                      alt="Avatar 1"
                      width={48}
                      height={48}
                      style={{ transform: "translateX(0%)" }}
                    />
                    <Image
                      className="absolute left-0 top-0 h-12 w-12 rounded-full"
                      src={avatar2}
                      alt="Avatar 2"
                      width={48}
                      height={48}
                      style={{ transform: "translateX(50%)" }}
                    />
                    <Image
                      className="absolute left-0 top-0 h-12 w-12 rounded-full"
                      src={avatar3}
                      alt="Avatar 3"
                      width={48}
                      height={48}
                      style={{ transform: "translateX(100%)" }}
                    />
                    <Image
                      className="absolute left-0 top-0 h-12 w-12 rounded-full"
                      src={avatar4}
                      alt="Avatar 4"
                      width={48}
                      height={48}
                      style={{ transform: "translateX(150%)" }}
                    />
                    <Image
                      className="absolute left-0 top-0 h-12 w-12 rounded-full"
                      src={avatar5}
                      alt="Avatar 5"
                      width={48}
                      height={48}
                      style={{ transform: "translateX(200%)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex h-full flex-col items-start justify-center overflow-hidden rounded-[30px] border border-gray-400 bg-white p-6 py-10 dark:border-gray-800 dark:bg-[#161616] lg:h-[470px]">
              <h3 className="mb-4 text-left text-2xl font-medium leading-tight text-gray-900 dark:text-white">
                Take the pain out of book keeping!
              </h3>
              <p className="text-left text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Wave goodbye to mountains of paperwork and endless email reminders. There’s now a new way of accounting.
              </p>
              <div className="relative mt-4 flex w-full flex-wrap items-start justify-between">
                <div
                  className="hidden w-full rounded-[12px] bg-[#F4F4F4] p-4 py-10 dark:bg-[#1A1A1A] lg:block lg:w-[calc(50%-12px)]"
                  style={{ height: "100%" }}
                >
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">$3453.00</h4>
                  <div className="mt-5 h-2 w-[90%] rounded-full bg-[#BDBDBD]"></div>
                  <div className="mt-5 h-2 w-[90%] rounded-full bg-[#BDBDBD]"></div>
                  <div className="mt-5 h-2 w-[50%] rounded-full bg-[#BDBDBD]"></div>
                </div>
                <div
                  className="mt-6 w-full rounded-[12px] bg-[#F4F4F4] p-4 py-10 dark:bg-[#1A1A1A] lg:mt-0 lg:w-[calc(50%-12px)]"
                  style={{ height: "100%" }}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Monthly Invoice</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-300">
                        <Image
                          src={invoiceIcon}
                          alt="Invoice Icon"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="mx-2 flex">
                        <div className="flex flex-col justify-center">
                          <p className="mr-2 text-gray-800 dark:text-white">John Client_download.Pdf</p>
                          <div className="mt-1 h-2 w-full rounded-full bg-[#BDBDBD] lg:w-[170px]"></div>
                        </div>

                        <div className="flex w-10 justify-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="3"
                            height="13"
                            viewBox="0 0 3 13"
                            fill="none"
                          >
                            <path
                              d="M3 1.39771C3 0.62897 2.37103 -2.74931e-08 1.60229 -6.10959e-08C0.833549 -9.46986e-08 0.204579 0.62897 0.204579 1.39771C0.204579 2.16645 0.833548 2.79542 1.60229 2.79542C2.37103 2.79542 3 2.16645 3 1.39771Z"
                              fill="#A4A4A4"
                            />
                            <path
                              d="M3 11.1817C3 10.4129 2.37103 9.78397 1.60229 9.78397C0.833548 9.78397 0.204578 10.4129 0.204578 11.1817C0.204578 11.9504 0.833548 12.5794 1.60229 12.5794C2.37103 12.5794 3 11.9504 3 11.1817Z"
                              fill="#A4A4A4"
                            />
                            <path
                              d="M3 6.2897C3 5.52096 2.37103 4.89199 1.60229 4.89199C0.833548 4.89199 0.204579 5.52096 0.204579 6.2897C0.204579 7.05844 0.833548 7.68741 1.60229 7.68741C2.37103 7.68741 3 7.05844 3 6.2897Z"
                              fill="#A4A4A4"
                            />
                          </svg>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-300">
                        <Image
                          src={invoiceIcon}
                          alt="Invoice Icon"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="mx-2 flex">
                        <div className="flex flex-col justify-center">
                          <p className="mr-2 text-gray-800 dark:text-white">John Client_download.Pdf</p>
                          <div className="mt-1 h-2 w-full rounded-full bg-[#BDBDBD] lg:w-[180px]"></div>
                        </div>

                        <div className="flex w-10 justify-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="3"
                            height="13"
                            viewBox="0 0 3 13"
                            fill="none"
                          >
                            <path
                              d="M3 1.39771C3 0.62897 2.37103 -2.74931e-08 1.60229 -6.10959e-08C0.833549 -9.46986e-08 0.204579 0.62897 0.204579 1.39771C0.204579 2.16645 0.833548 2.79542 1.60229 2.79542C2.37103 2.79542 3 2.16645 3 1.39771Z"
                              fill="#A4A4A4"
                            />
                            <path
                              d="M3 11.1817C3 10.4129 2.37103 9.78397 1.60229 9.78397C0.833548 9.78397 0.204578 10.4129 0.204578 11.1817C0.204578 11.9504 0.833548 12.5794 1.60229 12.5794C2.37103 12.5794 3 11.9504 3 11.1817Z"
                              fill="#A4A4A4"
                            />
                            <path
                              d="M3 6.2897C3 5.52096 2.37103 4.89199 1.60229 4.89199C0.833548 4.89199 0.204579 5.52096 0.204579 6.2897C0.204579 7.05844 0.833548 7.68741 1.60229 7.68741C2.37103 7.68741 3 7.05844 3 6.2897Z"
                              fill="#A4A4A4"
                            />
                          </svg>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300">
                        <Image
                          src={invoiceIcon}
                          alt="Invoice Icon"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="mx-2 flex">
                        <div className="flex flex-col justify-center">
                          <p className="mr-2 text-gray-800 dark:text-white">John Client_download.Pdf</p>
                          <div className="mt-1 h-2 w-full rounded-full bg-[#BDBDBD] lg:w-[130px]"></div>
                        </div>

                        <div className="flex w-10 justify-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="3"
                            height="13"
                            viewBox="0 0 3 13"
                            fill="none"
                          >
                            <path
                              d="M3 1.39771C3 0.62897 2.37103 -2.74931e-08 1.60229 -6.10959e-08C0.833549 -9.46986e-08 0.204579 0.62897 0.204579 1.39771C0.204579 2.16645 0.833548 2.79542 1.60229 2.79542C2.37103 2.79542 3 2.16645 3 1.39771Z"
                              fill="#A4A4A4"
                            />
                            <path
                              d="M3 11.1817C3 10.4129 2.37103 9.78397 1.60229 9.78397C0.833548 9.78397 0.204578 10.4129 0.204578 11.1817C0.204578 11.9504 0.833548 12.5794 1.60229 12.5794C2.37103 12.5794 3 11.9504 3 11.1817Z"
                              fill="#A4A4A4"
                            />
                            <path
                              d="M3 6.2897C3 5.52096 2.37103 4.89199 1.60229 4.89199C0.833548 4.89199 0.204579 5.52096 0.204579 6.2897C0.204579 7.05844 0.833548 7.68741 1.60229 7.68741C2.37103 7.68741 3 7.05844 3 6.2897Z"
                              fill="#A4A4A4"
                            />
                          </svg>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-center rounded-[30px] border border-gray-400 bg-white p-6 py-10 dark:border-gray-800 dark:bg-[#161616] lg:col-span-6"
            style={{ height: "470px" }}
          >
            <h3 className="mb-4 text-left text-4xl font-bold leading-tight text-gray-900 dark:text-white">
              Optimise expense Management as a team
            </h3>
            <p className="text-left text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace
              of mind for you.
            </p>
            <button className="mt-6 rounded-full bg-black px-6 py-3 text-white dark:bg-gray-300 dark:text-black">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
