"use client";
import { useState } from "react";
import styles from "./auth-dropdown.module.scss";
import Link from "next/link";

export default function AuthDropdown() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div className="relative text-white">
      <div className="space-y-2 cursor-pointer" onClick={handleClick}>
        <div
          className={`w-6 h-0.5 bg-white transform transition-transform duration-300 ${
            isActive ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isActive ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transform transition-transform duration-300 ${
            isActive ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <div
        className={`${styles.menu} absolute -left-20 top-10 ${
          isActive ? "block" : "hidden"
        } bg-white text-black text-center rounded-lg`}
      >
        <div onClick={handleClick}><Link href="/Auth?type=login&role=employee">
          Login
        </Link></div>
        <div onClick={handleClick}><Link href="/AboutUs">
          About us
        </Link></div>
        <div onClick={handleClick}><Link href="/Auth?type=signup">
          Register
        </Link></div>
        <div onClick={handleClick}><Link href="/Help">
          Help
        </Link></div>
        <div onClick={handleClick}><Link href="/ContactUs">
          Contact us
        </Link></div>
      </div>
    </div>
  );
}
