"use client";
import { useState } from "react";
import GiveResignation from "../GiveResignation/give-resignation.component";
import ApproveResignation from "../ApproveResignation/approve-resignation.component";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import type { defaultData } from "@/constants/Types/response-data";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Resign() {

    const [data, setData] = useState<defaultData[] | null>(null);
    const { role } = useSelector((state: RootState) => state.authDetail);

    useFetchGetMethod('get-all-resign-applications', 'admin', (data: defaultData[] | null) => setData(data))

    return (
        <div className="font-times">
            {
                role === "admin" ? <ApproveResignation data={data} /> : <GiveResignation />
            }
        </div>
    );
}