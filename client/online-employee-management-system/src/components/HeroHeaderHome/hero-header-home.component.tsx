"use client";
import styles from "./hero-header-home.module.scss";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Typed from "typed.js"; // Import Typed.js
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
  const typedRef = useRef<Typed | null>(null); // Create a ref for the Typed instance

  useEffect(() => {
    const authDetail = localStorage.getItem("authDetail");
    if (!autoLogin && authDetail) {
      dispatch(setDetail(JSON.parse(authDetail)));
      dispatch(setAutoLogin(true));
      router.push("/Dashboard");
    }

    // Initialize Typed.js
    const options = {
      strings: [
        "Employee Details",
        "Interview Questions",
        "Leave Applications",
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
    <div className="text-6xl mb-24 lg:w-3/4">
      <div className="flex items-center mb-5">
        <img className={styles.heroImage} src="favicon.ico" alt="" />
        <div className={`ml-4 ${styles.heroTitle}`}>DRIEMS Connect</div>
      </div>
      <div className="text-4xl mt-5">
        Explore <span className="typed-text"></span>{" "}
        {/* This is where the typing effect will appear */}
      </div>

      <div className="text-xl max-sm:text-sm mt-7 text-justify">
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
