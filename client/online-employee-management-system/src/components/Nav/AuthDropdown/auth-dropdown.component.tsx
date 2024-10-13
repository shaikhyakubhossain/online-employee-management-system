"use client"
import { useState } from "react";
import styles from "./auth-dropdown.module.scss";
import Link from "next/link";

export default function AuthDropdown() {

  const [isActive, setIsActive] = useState<boolean>(false)

    const handleClick = () => {
        if (isActive){
          setIsActive(false)
        }
        else{
          setIsActive(true)
        }
    }

  return (
      <div className="relative text-white">
        <div className="space-y-2 cursor-pointer" onClick={handleClick}>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
        <div className={`${styles.menu} absolute -left-20 top-10 ${ isActive ? "block" : "hidden" } bg-white text-black p-3`}>
            <Link href={"//Auth?type=login&role=employee"}><div>Login</div></Link>
            <Link href={"/AboutUs"}><div>About us</div></Link>
            <Link href={"//Auth?type=signup"}><div>Register</div></Link>
            <Link href={"/Help"}><div>Help</div></Link>
            <Link href={"/ContactUs"}><div>Contact us</div></Link>
        </div>
      </div>
  );
}
