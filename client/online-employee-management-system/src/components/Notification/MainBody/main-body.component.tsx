"use client";
import styles from "./main-body.module.scss";
import { useEffect, useState } from "react";
import { getUrl } from "@/constants/url";
import { notificationData } from "@/constants/Types/response-data";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody(){
    const [notification, setNotification] = useState<notificationData[]>([]);
    const { token } = useSelector((state: RootState) => state.authDetail);

    const getNotification = async () => {
        const data = await fetch(`${getUrl()}/get-all-notifications`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                role: "both"
            }
        });
        const json = await data.json();
        // console.log(json);
        setNotification(json.data);
    }

    useEffect(() => {
        getNotification();
    },[])
    return(
        <div className={`${styles.mainContainer}`}>
            {
                notification && notification.length > 0 ? notification.map((notification: notificationData): JSX.Element => {
                    return(
                        <div key={notification._id} className="flex hover:bg-gray-200 bg-gray-100 p-2 rounded-md">
                            <div className="text-2xl mr-8">{notification.title}</div>
                            <div className="text-lg my-auto">{notification.message}</div>
                        </div>
                    )
                }) : <div className="text-2xl">No notifications</div>
            }
        </div>
    )
}