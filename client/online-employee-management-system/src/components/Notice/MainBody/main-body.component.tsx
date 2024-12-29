"use client";
import Section from "../Section/section.component";
import { useState, useRef } from "react";
import type { noticeData } from "@/constants/Types/response-data";
import { getUrl } from "@/constants/url";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import AddNotice from "../AddNotice/add-notice.component copy";
import Toast from "@/components/Toast/toast.component";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody() {

    const [dataToSend, setDataToSend] = useState<noticeData>({
        title: "",
        message: ""
    });
    const [data, setData] = useState<noticeData[] | null>(null);
    const [toast, setToast] = useState(false);
    const { role, token } = useSelector((state: RootState) => state.authDetail);
    const errorMessageRef = useRef<string | null>(null);

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
            errorMessageRef.current = data.message ? data.message : data.error;
            setToast(true);
        })
    }
    
    return (
        <div>
            <Toast show={toast} hide={() => setToast(false)} message={errorMessageRef.current} />
            {
                role === "admin" && <AddNotice updateTitle={(data: string) => setDataToSend({ ...dataToSend, title: data })} updateMessage={(data: string) => setDataToSend({ ...dataToSend, message: data })} handleAddNotice={handleAddNotice} />
            }
            <Section title="Latest Notices" data={data} />
            <Section title="Other Notices" data={data} />
        </div>
    )
}