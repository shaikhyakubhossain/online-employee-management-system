// import styles from "./nav.module.scss";
// import Link from "next/link";

// export default function Nav() {
//   return (
//     <div
//       className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between h-20 text-white font-bold`}
//     >
//       <Link href={"/"}>
//         <div className="text-center text-xl px-6">
//           <div className="text-3xl">OMS</div>
//           <div>Employee</div>
//         </div>
//       </Link>
//       <div className={`${styles.middle} flex`}>
//         <div>
//           <Link href={"/Dashboard"}>
//             <div>Dashboard</div>
//           </Link>
//         </div>
//         <div>
//           <Link href={"/Notice"}>
//             <div>Notice</div>
//           </Link>
//         </div>
//         <div>
//           <Link href={"/Apply-for-leave"}>
//             <div>Apply for leave</div>
//           </Link>
//         </div>
//         <div>
//           <Link href={"/Access-Asset"}>
//             <div>Access/Asset</div>
//           </Link>
//         </div>
//         <div>
//           <Link href={"/Salary-Slip"}>
//             <div>Salary Slip</div>
//           </Link>
//         </div>
//         <div>
//           <Link href={"/Chat"}>
//             <div>Chat</div>
//           </Link>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// }

import React, { useState } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
  // Use state to handle the current active index for the carousel
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Define images and quotes for the carousel
  const slides = [
    {
      image: "https://via.placeholder.com/800x400?text=Employee+of+the+Week",
      title: "Employee of the Week",
      quote: "🎉 Congratulations to the Employee of the Week! Keep up the great work and continue to shine! 🌟",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Employee+of+the+Month",
      title: "Employee of the Month",
      quote: "🎉 Congratulations to the Employee of the Month! Your dedication and hard work are truly inspiring! 🌟",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Employee+of+the+Year",
      title: "Employee of the Year",
      quote: "🎉 Congratulations to the Employee of the Year! An outstanding achievement—your efforts are unmatched! 🌟",
    },
  ];

  // Handler for next and previous slides
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div
        className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between h-20 text-white font-bold`}
      >
        <Link href={"/"}>
          <div className="text-center text-xl px-6">
            <div className="text-3xl">OMS</div>
            <div>Employee</div>
          </div>
        </Link>
        <div className={`${styles.middle} flex`}>
          <div>
            <Link href={"/Dashboard"}>
              <div>Dashboard</div>
            </Link>
          </div>
          <div>
            <Link href={"/Notice"}>
              <div>Notice</div>
            </Link>
          </div>
          <div>
            <Link href={"/Apply-for-leave"}>
              <div>Apply for leave</div>
            </Link>
          </div>
          <div>
            <Link href={"/Access-Asset"}>
              <div>Access/Asset</div>
            </Link>
          </div>
          <div>
            <Link href={"/Salary-Slip"}>
              <div>Salary Slip</div>
            </Link>
          </div>
          <div>
            <Link href={"/Chat"}>
              <div>Chat</div>
            </Link>
          </div>
        </div>
        <div></div>
      </div>

      {/* Carousel for Employee Recognition */}
      <div className="relative w-full mt-24">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Carousel content */}
          <div className="duration-700 ease-in-out">
            <img
              src={slides[currentIndex]?.image || ""}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slides[currentIndex]?.title || "Slide"}
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-lg text-white bg-black bg-opacity-50 p-2 rounded">
              <p>{slides[currentIndex]?.quote}</p>
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={currentIndex === index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
