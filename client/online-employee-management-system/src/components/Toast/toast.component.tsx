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
      className="fixed bottom-14 left-5 z-10 flex items-center w-full max-w-xs p-4 text-black font-semibold bg-white border-2 border-blue-500 rounded-lg shadow transition-transform duration-100 ease-in-out"
      style={{ transform: props.show ? "translateX(0)" : "translateX(-120%)" }}
    >
      <div className="text-sm font-normal">{props.message}</div>
    </div>
  );
}
