"use client";
import { useState } from "react";
import GiveResignation from "../GiveResignation/give-resignation.component";
import ApproveResignation from "../ApproveResignation/approve-resignation.component";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import type { defaultData } from "@/constants/Types/response-data";
import { getUrl } from "@/constants/url";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type dataToSendType = {
    reason: string;
};

export default function MainBody() {

    const [data, setData] = useState<defaultData[] | null>(null);
    const [dataToSend, setDataToSend] = useState<dataToSendType>({
        reason: "",
    });
    const { role, token } = useSelector((state: RootState) => state.authDetail);

    // if(role === "admin"){
        useFetchGetMethod('get-all-resign-applications', 'admin', (data: defaultData[] | null) => setData(data));
    // }

    const handleGiveResignation = () => {
        fetch(`${getUrl()}/add-resign`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                role: "employee",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.error ? data.error : data.message);
            })
            .catch((err) => {
                alert(err);
            });
    }

    console.log(dataToSend);

    return (
        <div className="font-times">
            {
                role === "admin" ? <ApproveResignation data={data} /> : <GiveResignation updateDataToSend={(e) => setDataToSend({ ...dataToSend, reason: e })} submit={handleGiveResignation} />
            }
        </div>
    );
}