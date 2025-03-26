'use client'
import styles from "./right-side-notification-update-btn.module.scss";
import { useState } from "react";

export default function RightSideNotificationUpdateBtn(): JSX.Element {

  const [isNotificationOn, setIsNotificationOn] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsNotificationOn(!isNotificationOn);
    console.log(isNotificationOn);
  }

  return (
    <div className={`${styles.mainContainer} flex items-center`}>
      <div onClick={handleOnClick} className={`${styles.notificationBtnContainer} flex items-center w-20 h-10 bg-gray-300 rounded-full px-2 shadow-lg ${isNotificationOn ? 'bg-blue-200' : 'bg-blue-700'}`}>
        <div className={`${ isNotificationOn ? styles.notificationBtnLeft : styles.notificationBtnRight } w-6 h-6 ${isNotificationOn ? "bg-blue-700" : "bg-gray-400"} rounded-full cursor-pointer transition-all duration-300`}></div>
      </div>
      {!isNotificationOn ? <div className="w-60 text-xl">
        Turn on notifications for latest updates .
      </div> : <div className="flex justify-center items-center rounded-full w-12 h-12 bg-blue-700"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxOSAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjAwMDgzIDEyLjc4NzFWMTIuNTY4MUMxLjAzMjk1IDExLjkyMDIgMS4yNDA2IDExLjI5MjUgMS42MDIzNiAxMC43NDk2QzIuMjA0NSAxMC4wOTc1IDIuNjE2NyA5LjI5ODMxIDIuNzk1NzEgOC40MzU5OEMyLjc5NTcxIDcuNzY5NSAyLjc5NTcxIDcuMDkzNSAyLjg1MzkzIDYuNDI3MDNDMy4xNTQ2OSAzLjIxODQyIDYuMzI3MjggMSA5LjQ2MTA2IDFIOS41Mzg2N0MxMi42NzI1IDEgMTUuODQ1IDMuMjE4NDIgMTYuMTU1NSA2LjQyNzAzQzE2LjIxMzcgNy4wOTM1IDE2LjE1NTUgNy43Njk1IDE2LjIwNCA4LjQzNTk4QzE2LjM4NTQgOS4zMDAzIDE2Ljc5NzIgMTAuMTAxOSAxNy4zOTc0IDEwLjc1OTFDMTcuNzYxOCAxMS4yOTcyIDE3Ljk2OTggMTEuOTIyNyAxNy45OTg5IDEyLjU2ODFWMTIuNzc3NkMxOC4wMjA2IDEzLjY0OCAxNy43MjA4IDE0LjQ5NjggMTcuMTU0OCAxNS4xNjc0QzE2LjQwNyAxNS45NTE1IDE1LjM5MjEgMTYuNDM5MyAxNC4zMDI0IDE2LjUzODRDMTEuMTA3IDE2Ljg4MTIgNy44ODMwMyAxNi44ODEyIDQuNjg3NjIgMTYuNTM4NEMzLjU5OTE0IDE2LjQzNSAyLjU4NTc2IDE1Ljk0NzkgMS44MzUyMSAxNS4xNjc0QzEuMjc4IDE0LjQ5NjMgMC45ODIyNDEgMTMuNjUyNiAxLjAwMDgzIDEyLjc4NzFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03LjA1NDkzIDE5Ljg1MThDNy41NTQyMSAyMC40Nzg0IDguMjg3MzkgMjAuODg0IDkuMDkyMjIgMjAuOTc4N0M5Ljg5NzA2IDIxLjA3MzQgMTAuNzA3MiAyMC44NDk1IDExLjM0MzMgMjAuMzU2NEMxMS41Mzg5IDIwLjIxMDYgMTEuNzE0OSAyMC4wNDEgMTEuODY3MiAxOS44NTE4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" /></div>}
    </div>
  );
}
