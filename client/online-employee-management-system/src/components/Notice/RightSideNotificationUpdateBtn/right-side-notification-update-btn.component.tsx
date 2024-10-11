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
      <div onClick={handleOnClick} className={`${styles.notificationBtnContainer} flex items-center w-20 h-10 bg-gray-300 rounded-full px-2 shadow-lg ${isNotificationOn ? 'bg-blue-700' : ''}`}>
        <div className={`${ isNotificationOn ? styles.notificationBtnLeft : styles.notificationBtnRight } w-6 h-6 bg-blue-700 rounded-full cursor-pointer transition-all duration-300`}></div>
      </div>
      <div className="w-60 text-xl">
        Turn on notifications for latest updates .
      </div>
    </div>
  );
}
