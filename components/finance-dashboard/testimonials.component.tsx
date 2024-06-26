"use client";

import { SwiperComponent } from "@/components/finance-dashboard/swiper.component";

const Testimonials = () => {
  return (
    <section className="bg-[#F6F6F6] py-20 dark:bg-[#0F0F0F]">
      <div className="container relative mx-auto px-4 pb-36 text-center">
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
                  d="M14 3.25H3.00001C2.66849 3.25 2.35055 3.3817 2.11613 3.61612C1.88171 3.85054 1.75001 4.16848 1.75001 4.5V14.5C1.74901 14.738 1.81663 14.9713 1.94476 15.172C2.07289 15.3726 2.25612 15.532 2.47251 15.6313C2.63862 15.709 2.81972 15.7495 3.00314 15.75C3.29665 15.7492 3.58045 15.6448 3.80439 15.455L3.81626 15.445L5.75001 13.75H14C14.3315 13.75 14.6495 13.6183 14.8839 13.3839C15.1183 13.1495 15.25 12.8315 15.25 12.5V4.5C15.25 4.16848 15.1183 3.85054 14.8839 3.61612C14.6495 3.3817 14.3315 3.25 14 3.25ZM13.75 12.25H5.65626C5.36199 12.25 5.07715 12.3538 4.85189 12.5431L4.84001 12.5531L3.25001 13.9462V4.75H13.75V12.25Z"
                  fill="#1D1C20"
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
                  d="M14 3.25H3C2.66848 3.25 2.35054 3.3817 2.11612 3.61612C1.8817 3.85054 1.75 4.16848 1.75 4.5V14.5C1.749 14.738 1.81661 14.9713 1.94475 15.172C2.07288 15.3726 2.25611 15.532 2.4725 15.6313C2.63861 15.709 2.81971 15.7495 3.00312 15.75C3.29664 15.7492 3.58044 15.6448 3.80437 15.455L3.81625 15.445L5.75 13.75H14C14.3315 13.75 14.6495 13.6183 14.8839 13.3839C15.1183 13.1495 15.25 12.8315 15.25 12.5V4.5C15.25 4.16848 15.1183 3.85054 14.8839 3.61612C14.6495 3.3817 14.3315 3.25 14 3.25ZM13.75 12.25H5.65625C5.36198 12.25 5.07714 12.3538 4.85187 12.5431L4.84 12.5531L3.25 13.9462V4.75H13.75V12.25Z"
                  fill="#A3DC2F"
                />
              </svg>
            </span>
            <span className="dark:text-[#A3DC2F]">Testimonials</span>
          </button>
        </div>
        <h2 className="mb-4 text-4xl font-bold text-[#1D1C20] dark:text-white">What are people saying</h2>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
          "Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the
          best [products/services offered]. Read what our clients have to say about their experience with us."
        </p>
        <SwiperComponent />
      </div>
    </section>
  );
};

export default Testimonials;
