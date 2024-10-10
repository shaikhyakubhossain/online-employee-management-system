"use client";
import styles from "./greeting.module.scss";

import { RootState } from "@/lib/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Greeting(): JSX.Element {
  const { data } = useSelector((state: RootState) => state.authDetail);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div
        className={`${styles.greeting} font-bold text-4xl max-[552px]:text-[6.5vw]`}
      >
        Hello&nbsp;{data?.designation}.&nbsp;{data?.firstName}&nbsp;👋
      </div>
      <div className={`${styles.subtext} text-2xl`}>
        You can manage your things here
      </div>
    </div>
  );
}
