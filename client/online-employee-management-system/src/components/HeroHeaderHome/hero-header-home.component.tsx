"use client";
import styles from "./hero-header-home.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    const authDetail = localStorage.getItem("authDetail");
    if (!autoLogin && authDetail) {
      dispatch(setDetail(JSON.parse(authDetail)));
      dispatch(setAutoLogin(true));
      router.push("/Dashboard");
    }
  }, []);

  return (
    <div className="text-6xl mb-24 lg:w-3/4">
      <div className="flex items-center mb-5">
        <img className={styles.heroImage} src="favicon.ico" alt="" />
        <div className="ml-4 ${styles.heroTitle}">DRIEMS Connect</div>
      </div>{" "}
      <div className="text-xl max-sm:text-sm mt-5">
      The Online Employee Management System is a comprehensive web-based application designed to streamline HR operations by managing employee information, tracking attendance, and monitoring performance. It provides functionalities for adding, updating, and removing employee details, while maintaining an organized database. The system supports role-based access control, allowing administrators to assign different permissions to employees and manage their roles efficiently. Additionally, it includes features such as leave management, payroll generation, and real-time reporting, making it an all-in-one solution for simplifying workforce management.
      </div>
    </div>
  );
}
