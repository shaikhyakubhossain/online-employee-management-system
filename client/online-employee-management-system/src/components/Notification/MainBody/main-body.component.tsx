"use client";
import styles from "./main-body.module.scss";
import { useState } from "react";
import type { notificationData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";

type serverData = {
    data: notificationData[],
}

export default function MainBody(){
    const [notification, setNotification] = useState<serverData | null>(null);

    useFetchGetMethod("get-all-notifications", "both", (data: serverData | null) => setNotification(data), true);
    console.log(notification);
    return(
        <div className={`${styles.mainContainer}`}>
            {
                notification && notification.data.length > 0 ? notification.data.map((notification: notificationData): JSX.Element => {
                    return(
                        <div key={notification._id} className="flex hover:bg-gray-200 bg-gray-100 p-2 rounded-md my-2 cursor-pointer">
                            <div className="text-2xl mr-8">{notification.title}</div>
                            <div className="text-lg my-auto">{notification.message}</div>
                        </div>
                    )
                }) : <div className="text-2xl">No notifications</div>
            }
        </div>
    )
}