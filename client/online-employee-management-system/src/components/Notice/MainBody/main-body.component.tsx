"use client";
import Section from "../Section/section.component";
import { useState } from "react";
import type { noticeData } from "@/constants/Types/response-data";
import { getUrl } from "@/constants/url";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";

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
        sendData()
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
                role === "admin" && (
                    <div className="">
                        <div>
                        <div className="text-2xl">Add Notice</div>
                        <input className="border-2 border-black m-2" onChange={event => setDataToSend({ ...dataToSend, title: event.target.value })} type="text" placeholder="Title" /><br /><textarea className="border-2 border-black m-2" onChange={event => setDataToSend({ ...dataToSend, message: event.target.value })} placeholder="Body" />
                        </div>
                        <div className="text-lg my-6"><span onClick={handleAddNotice} className="text-red-500 bg-slate-200 p-3 rounded-lg cursor-pointer hover:bg-slate-300">submit</span></div>
                    </div>
                )
            }
            <Section title="Latest Notices" data={data} />
            <Section title="Other Notices" data={data} />
        </div>
    )
}