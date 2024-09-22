"use client"
// import styles from "./hero-header-home..module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { setDetail, setAutoLogin } from "@/lib/features/AuthDetail/authDetailSlice";

export default function HeroHeaderHome() {

    const {autoLogin} = useSelector((state: RootState) => state.authDetail);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        let authDetail = localStorage.getItem("authDetail");
        if(!autoLogin && authDetail){
            dispatch(setDetail(JSON.parse(authDetail)));
            dispatch(setAutoLogin(true))
            router.push("/Dashboard");
        }
    },[])

  return (
    <div className="text-6xl mb-24 lg:w-3/4">
      <div>Employee verse</div>
      <div className="text-2xl max-sm:text-sm mt-5">
        Efficiently manage your workforce with our streamlined platform. Our
        system offers an all-in-one solution for organizing employee details,
        tracking performance, managing payroll, and more. Whether you’re a small
        business or a large enterprise, our tool ensures that you can handle all
        employee-related tasks with ease.
      </div>
    </div>
  );
}
