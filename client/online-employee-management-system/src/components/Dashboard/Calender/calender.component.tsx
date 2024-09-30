"use client";
import { useState } from "react";
import React from "react";
import Calendar from "react-calendar";
// import styles from "./calender.module.scss";
import "./calender.custom.css";

export default function Calender(): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date());

  const tileClassName = ({ date, view }: {date: Date, view: string}) => {
    const defaultClassName = 'text-sm ';
    if (view === 'month') {
      if (date.getDay() === 0 || date.getDay() === 6) {
        return defaultClassName + 'text-red-500';
      }
      if(date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
        console.log(date);
        return defaultClassName + 'text-white bg-blue-500';
      }
    }
    return defaultClassName;
  };

  return (
    <div className={`w-1/2 rounded-lg bg-[#FFEBEB] h-60 flex flex-col justify-evenly items-center overflow-hidden` }>
      <Calendar value={currentDate} className="h-3/4 w-4/5 text-center font-semibold text-xl" tileClassName={tileClassName}/>
    </div>
  );
}
