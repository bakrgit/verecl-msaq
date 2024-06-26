"use client";

import React from "react";

const Plans = () => {
  return (
    <section className="bg-[#F2F2F2] py-20 dark:bg-[#0F0F0F]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex justify-center">
          <button className="flex items-center justify-center space-x-2 rounded-full border border-[#1D1C20] px-4 py-2 dark:border-[#A3DC2F]">
            <span className="text-[#1D1C20] dark:text-[#A3DC2F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M12.1667 3.83331C12.719 3.83331 13.1667 4.28103 13.1667 4.83331C13.1667 5.3856 12.719 5.83331 12.1667 5.83331C11.6144 5.83331 11.1667 5.3856 11.1667 4.83331C11.1667 4.28103 11.6144 3.83331 12.1667 3.83331Z"
                  stroke="#1D1C20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.34949 7.92925C1.68072 8.67618 1.66633 9.80305 2.28011 10.5958C3.49807 12.1688 4.83116 13.5019 6.40422 14.7198C7.19693 15.3336 8.3238 15.3192 9.07073 14.6505C11.0986 12.8348 12.9557 10.9372 14.7479 8.85191C14.9251 8.64578 15.0359 8.39311 15.0608 8.12238C15.1708 6.9253 15.3968 3.47643 14.4602 2.53981C13.5235 1.60319 10.0747 1.82916 8.8776 1.93915C8.60687 1.96403 8.3542 2.07487 8.148 2.25205C6.06275 4.04429 4.16521 5.90139 2.34949 7.92925Z"
                  stroke="#1D1C20"
                />
                <path
                  d="M5.16667 9.83331L7.16667 11.8333"
                  stroke="#1D1C20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="hidden text-[#A3DC2F] dark:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M12.1667 3.83331C12.719 3.83331 13.1667 4.28103 13.1667 4.83331C13.1667 5.3856 12.719 5.83331 12.1667 5.83331C11.6144 5.83331 11.1667 5.3856 11.1667 4.83331C11.1667 4.28103 11.6144 3.83331 12.1667 3.83331Z"
                  stroke="#A3DC2F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.34949 7.92925C1.68072 8.67618 1.66633 9.80305 2.28011 10.5958C3.49807 12.1688 4.83116 13.5019 6.40422 14.7198C7.19693 15.3336 8.3238 15.3192 9.07073 14.6505C11.0986 12.8348 12.9557 10.9372 14.7479 8.85191C14.9251 8.64578 15.0359 8.39311 15.0608 8.12238C15.1708 6.9253 15.3968 3.47643 14.4602 2.53981C13.5235 1.60319 10.0747 1.82916 8.8776 1.93915C8.60687 1.96403 8.3542 2.07487 8.148 2.25205C6.06275 4.04429 4.16521 5.90139 2.34949 7.92925Z"
                  stroke="#A3DC2F"
                />
                <path
                  d="M5.16667 9.83331L7.16667 11.8333"
                  stroke="#A3DC2F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="dark:text-[#A3DC2F] ">Pricing</span>
          </button>
        </div>
        <h2 className="mb-4 text-4xl font-bold text-[#1D1C20] dark:text-white">Find the right plan</h2>
        <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">
          Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and
          see how
        </p>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
          We can help you streamline your finances and reach your business goals.
        </p>
        <div className="flex justify-center">
          <div className="grid justify-between gap-10 md:grid-cols-3">
            <div
              className="flex flex-col justify-between rounded-xl border border-gray-300 p-6 dark:border-gray-700"
              style={{ height: "700px", maxWidth: "400px" }}
            >
              <div>
                <h3 className="mb-4 text-center text-2xl font-bold text-[#1D1C20] dark:text-[#FBFBFB]">Basic</h3>
                <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
                  Get a professional website designed according to your needs.
                </p>
                <div className="my-10 text-4xl font-bold text-gray-900 dark:text-white">
                  $499<span className="text-lg font-medium">/month</span>
                </div>
                <ul className="space-y-2 text-start text-gray-600 dark:text-gray-300">
                  <li>✔️ Get a fully designed Website.</li>
                  <li>✔️ Webflow Development</li>
                  <li>✔️ Limited Support</li>
                </ul>
              </div>
              <button className="mt-4 flex w-full items-center justify-center self-stretch rounded-full border border-gray-900  py-[20px] text-gray-900 dark:border-gray-300 dark:text-gray-300">
                Get started
              </button>
            </div>
            <div
              className="relative flex flex-col justify-between rounded-xl border border-gray-300 p-6 dark:border-gray-700"
              style={{ height: "700px", maxWidth: "400px" }}
            >
              <span
                className="absolute  m-4 flex items-center space-x-1 rounded-full border-2 border-[#236456] bg-[#0A0A0A] px-2 py-1 text-sm font-semibold text-[#33C6AB]"
                style={{ right: "-2%", top: "-1%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_22_561)">
                    <path
                      d="M14.4253 7.75488L10.5703 6.26538L9.16841 2.16945C9.08097 1.91383 8.9216 1.693 8.71195 1.53694C8.50229 1.38089 8.25251 1.29718 7.99653 1.29718C7.74055 1.29718 7.49077 1.38089 7.28112 1.53694C7.07147 1.693 6.9121 1.91383 6.82466 2.16945L5.42278 6.26538L1.56778 7.75488C1.3272 7.84778 1.11936 8.01711 0.972485 8.23987C0.825612 8.46262 0.746826 8.72801 0.746826 8.99999C0.746826 9.27197 0.825612 9.53736 0.972485 9.76012C1.11936 9.98288 1.3272 10.1522 1.56778 10.2451L5.42278 11.7346L6.82466 15.8305C6.9121 16.0862 7.07147 16.307 7.28112 16.463C7.49077 16.6191 7.74055 16.7028 7.99653 16.7028C8.25251 16.7028 8.50229 16.6191 8.71195 16.463C8.9216 16.307 9.08097 16.0862 9.16841 15.8305L10.5703 11.7346L14.4253 10.2451C14.6659 10.1522 14.8737 9.98288 15.0206 9.76012C15.1675 9.53736 15.2462 9.27197 15.2462 8.99999C15.2462 8.72801 15.1675 8.46262 15.0206 8.23987C14.8737 8.01711 14.6659 7.84778 14.4253 7.75488ZM9.94716 10.2783C9.77571 10.3443 9.62 10.4496 9.49105 10.5866C9.3621 10.7236 9.26305 10.889 9.20091 11.0712L7.99653 14.5907L6.79216 11.0712C6.73002 10.889 6.63097 10.7236 6.50202 10.5866C6.37306 10.4496 6.21736 10.3443 6.04591 10.2783L2.73341 8.99999L6.04591 7.72035C6.21736 7.65432 6.37306 7.54908 6.50202 7.41207C6.63097 7.27506 6.73002 7.10962 6.79216 6.92745L7.99653 3.40792L9.20091 6.92745C9.26305 7.10962 9.3621 7.27506 9.49105 7.41207C9.62 7.54908 9.77571 7.65432 9.94716 7.72035L13.2597 8.99999L9.94716 10.2783Z"
                      fill="#33C6AB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_561">
                      <rect
                        width="16"
                        height="17"
                        fill="white"
                        transform="translate(-0.00341797 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Popular</span>
              </span>
              <div>
                <h3 className="mb-4 text-center text-2xl font-normal text-[#729F19]">Pro</h3>
                <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
                  Get a professional website designed according to your needs.
                </p>
                <div className="my-10 text-4xl font-bold text-gray-900 dark:text-white">
                  $499<span className="text-lg font-medium">/month</span>
                </div>
                <ul className="space-y-2 text-start text-gray-600 dark:text-gray-300">
                  <li>✔️ Get a fully designed Website.</li>
                  <li>✔️ Webflow Development</li>
                  <li>✔️ Limited Support</li>
                  <li>✔️ Standard integrations</li>
                  <li>✔️ Email support</li>
                  <li>✔️ Email support</li>
                </ul>
              </div>
              <button className="mt-4 flex w-full items-center justify-center self-stretch rounded-full bg-gray-900  py-[20px] text-white dark:bg-gray-300 dark:text-gray-900">
                Get started
              </button>
            </div>
            <div
              className="flex flex-col justify-between rounded-xl border border-gray-300 p-6 dark:border-gray-700"
              style={{ height: "700px", maxWidth: "400px" }}
            >
              <div>
                <h3 className="mb-4 text-center text-2xl font-normal text-[#1D1C20] dark:text-[#A3DC2F]">Enterprise</h3>
                <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
                  Get a professional website designed according to your needs.
                </p>
                <div className="my-10 text-4xl font-bold text-gray-900 dark:text-white">
                  $999<span className="text-lg font-medium">/month</span>
                </div>
                <ul className="space-y-2 text-start text-gray-600 dark:text-gray-300">
                  <li>✔️ Get a fully designed Website.</li>
                  <li>✔️ Webflow Development</li>
                  <li>✔️ Limited Support</li>
                  <li>✔️ Standard integrations</li>
                  <li>✔️ Email support</li>
                  <li>✔️ Email support</li>
                  <li>✔️ Email support</li>
                </ul>
              </div>
              <button className="mt-4 flex w-full items-center justify-center self-stretch rounded-full bg-lime-500  py-[20px] text-white dark:bg-lime-500 dark:text-gray-900">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
