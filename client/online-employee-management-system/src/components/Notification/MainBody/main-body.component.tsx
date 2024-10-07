"use client";
import styles from "./main-body.module.scss";
import { useState } from "react";
import type { notificationData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchGetMethod/useFetchGetMethod";

export default function MainBody(){
    const [notification, setNotification] = useState<notificationData[] | null>([]);

    useFetchGetMethod("get-all-notifications", "both", (data: notificationData[] | null) => setNotification(data));

    return(
        <div className={`${styles.mainContainer}`}>
            {
                notification && notification.length > 0 ? notification.map((notification: notificationData): JSX.Element => {
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