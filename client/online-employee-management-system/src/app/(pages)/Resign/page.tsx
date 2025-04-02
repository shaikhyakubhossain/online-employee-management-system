"use client"
import PageHeader from "@/components/PageHeader/page-header.component";
import MainBody from "@/components/Resign/MainBody/main-body.component";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Resign() {

    const {data} = useSelector((state: RootState) => state.authDetail)
    console.log("here data: ", data)

    return (
        <div className="font-times">
            <PageHeader title={data && data.adminId  ? "Approve Resign" : "Resign"} />
            <MainBody />
        </div>
    );
}