"use client";
import Section from "../Section/section.component";
import { useState } from "react";
import type { noticeData } from "@/constants/Types/response-data";
import { getUrl } from "@/constants/url";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import AddNotice from "../AddNotice/add-notice.component copy";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody() {

    const [dataToSend, setDataToSend] = useState<noticeData>({
        title: "",
        message: ""
    });
    const [data, setData] = useState<noticeData[] | null>(null);
    const { role, token } = useSelector((state: RootState) => state.authDetail);

    useFetchGetMethod(
        "get-all-notices",
        "both",
        (data: noticeData[] | null) => setData(data)
    );

    const handleAddNotice = () => {
        sendData();
        window.location.reload();
    }

    const sendData = () => {
        fetch(`${getUrl()}/add-notice`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                role: "admin",
            },
            body: JSON.stringify(dataToSend),
        }).then((res) => res.json()).then((data) => {
            if(data.error) alert(data.error)
            else alert(data.message)
        })
    }
    
    return (
        <div>
            {
                role === "admin" && <AddNotice updateTitle={(data: string) => setDataToSend({ ...dataToSend, title: data })} updateMessage={(data: string) => setDataToSend({ ...dataToSend, message: data })} handleAddNotice={handleAddNotice} />
            }
            <Section title="Latest Notices" data={data} />
            <Section title="Other Notices" data={data} />
        </div>
    )
}