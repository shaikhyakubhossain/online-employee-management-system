import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calender(): JSX.Element {
  const currentDate = new Date();

  return (
    <div className="calendar-wrapper w-1/2 p-1 rounded-lg bg-[#FFEBEB] h-[435px] flex flex-col justify-evenly items-center overflow-hidden">
      <div className="flex text-red-500">
        <div className="font-bold text-2xl">Calendar</div>
      </div>

      {/* Static React Calendar Component with consistent height and trimmed spaces */}
      <Calendar value={currentDate} className="h-3/4 w-full" />
    </div>
  );
}
