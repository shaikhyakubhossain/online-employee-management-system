"use client";
import styles from "./greeting.module.scss";

import { RootState } from "@/lib/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type propsType = {
  title: string;
  message: string;
  showEmoji: boolean;
  showCurrentUserName: boolean;
};

export default function Greeting(props: propsType): JSX.Element {
  const { data } = useSelector((state: RootState) => state.authDetail);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div
        className={`${styles.greeting} flex font-bold text-4xl max-[552px]:text-[6.5vw] max-[363px]:text-[5.5vw]`}
      >
        {props.title}&nbsp;{props.showCurrentUserName && <div>{data?.designation}.&nbsp;{data?.firstName}&nbsp;{props.showEmoji && "👋"}</div>}
      </div>
      {props.message && (
        <div className={`${styles.subtext} text-2xl max-[552px]:text-[4.5vw]`}>
          {props.message}
        </div>
      )}
    </div>
  );
}
