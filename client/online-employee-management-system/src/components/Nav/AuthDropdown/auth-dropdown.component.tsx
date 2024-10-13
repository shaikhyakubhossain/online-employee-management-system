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
        } bg-white text-black p-3`}
      >
        <Link href="/Auth?type=login&role=employee">
          <div onClick={handleClick}>Login</div>
        </Link>
        <Link href="/AboutUs">
          <div onClick={handleClick}>About us</div>
        </Link>
        <Link href="/Auth?type=signup">
          <div onClick={handleClick}>Register</div>
        </Link>
        <Link href="/Help">
          <div onClick={handleClick}>Help</div>
        </Link>
        <Link href="/ContactUs">
          <div onClick={handleClick}>Contact us</div>
        </Link>
      </div>
    </div>
  );
}
