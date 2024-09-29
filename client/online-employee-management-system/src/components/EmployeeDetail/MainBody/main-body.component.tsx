"use client";
// import styles from "./main-body.module.scss";
import { useState, useEffect } from "react";
import SearchBox from "@/components/SearchBox/search-box.component";
import Table from "@/components/Table/table.component";
import { getUrl } from "@/constants/url";
import type{ employeeData } from "@/constants/Types/response-data";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody() {

    const [data, setData] = useState<employeeData[] | null>(null);
    const token = useSelector((state: RootState) => state.authDetail.token);

    useEffect(() => {
        fetch(`${getUrl()}/get-all-employees`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data.data);
            console.log(data);
        })
    },[])
    
    return (
        <div>
            <SearchBox />
            <Table data={data} headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]} showAction={false}/>
        </div>
    )
}