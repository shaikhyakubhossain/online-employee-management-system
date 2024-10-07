"use client";
import styles from "./hero-header-home.module.scss";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Typed from "typed.js";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setDetail,
  setAutoLogin,
} from "@/lib/features/AuthDetail/authDetailSlice";
import Head from "next/head"; // Import Head component from Next.js

export default function HeroHeaderHome() {
  const { autoLogin } = useSelector((state: RootState) => state.authDetail);
  const dispatch = useDispatch();
  const router = useRouter();
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const authDetail = localStorage.getItem("authDetail");
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
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="text-6xl mb-24 lg:w-3/4"
        style={{ fontFamily: "Lora, serif" }}
      >
        <div className="flex items-center mb-5">
          <img
            className={`${styles.heroImage} rounded-s-xl`}
            src="favicon.ico"
            alt=""
          />
          <div className={`ml-4 ${styles.heroTitle} ${styles.heroContainer}`}>
            DRIEMS Connect
          </div>
        </div>
        <div className="text-4xl mt-6">
          Explore <span className="typed-text"></span>{" "}
          {/* This is where the typing effect will appear */}
        </div>

        <div className="text-2xl max-sm:text-sm mt-6 text-justify">
          The Online Employee Management System is a comprehensive web-based
          application designed to streamline HR operations by managing employee
          information, tracking attendance, and monitoring performance. It
          provides functionalities for adding, updating, and removing employee
          details, while maintaining an organized database. The system supports
          role-based access control, allowing administrators to assign different
          permissions to employees and manage their roles efficiently.
        </div>
      </div>
    </>
  );
}
