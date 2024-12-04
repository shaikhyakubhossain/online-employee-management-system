"use client";
import styles from "./hero-header-home.module.scss";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import HeroLogo from "@/constants/Svg/heroLogo";

import Typed from "typed.js";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setDetail,
  setAutoLogin,
} from "@/lib/features/AuthDetail/authDetailSlice";

export default function HeroHeaderHome() {
  const { autoLogin } = useSelector((state: RootState) => state.authDetail);
  const dispatch = useDispatch();
  const router = useRouter();
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const authDetail = localStorage.getItem("OEMS-authDetail");
    if (!autoLogin && authDetail) {
      dispatch(setDetail(JSON.parse(authDetail)));
      dispatch(setAutoLogin(true));
      router.push("/Dashboard");
    }

    const options = {
      strings: [
        "Employee Details",
        "Academic Notes",
        "Interview Questions",
        "Leave Applications",
        "Attendance Records",
      ],
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    };

    typedRef.current = new Typed(".typed-text", options);

    return () => {
      typedRef.current?.destroy();
    };
  }, [autoLogin, dispatch, router]);

  return (
    <div
      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 lg:mb-12 lg:w-3/4"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="flex items-center mb-3 sm:mb-4 md:mb-5">
        <div>
          <HeroLogo color="white" width="100px" height="100px" />
        </div>
        <div
          className={`ml-2 sm:ml-3 md:ml-4 lg:ml-5 ${styles.heroTitle} ${styles.heroContainer} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
        >
          Employee Verse
        </div>
      </div>

      <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl mt-3 sm:mt-4 lg:mt-6">
        Explore <span className="typed-text"></span>
      </div>
      <div className="text-base sm:text-lg md:text-lg lg:text-2xl mt-4 text-justify">
        The Online Employee Management System is a comprehensive web-based
        application designed to streamline HR operations by managing employee
        information, tracking attendance, and monitoring performance. It
        provides functionalities for adding, updating, and removing employee
        details, while maintaining an organized database. The system supports
        role-based access control, allowing administrators to assign different
        permissions to employees and manage their roles efficiently.
      </div>
    </div>
  );
}
