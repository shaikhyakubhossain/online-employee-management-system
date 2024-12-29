"use client";
import { useEffect } from "react";

type propsType = {
  show: boolean;
  hide: () => void;
  message: string | null;
};

export default function Toast(props: propsType) {

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (props.show) {
      timer = setTimeout(() => {
        props.hide();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [props.show]);

  return (
    <div
      className="fixed bottom-14 left-5 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      style={{ display: props.show ? "flex" : "none" }}
    >
      <div className="text-sm font-normal">{props.message}</div>
    </div>
  );
}
