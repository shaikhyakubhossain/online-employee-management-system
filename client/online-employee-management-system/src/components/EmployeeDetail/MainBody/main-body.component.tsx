"use client";
// import styles from "./main-body.module.scss";
import { useState } from "react";
import SearchBox from "@/components/SearchBox/search-box.component";
import Table from "@/components/Table/table.component";
import type { employeeData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchGetMethod/useFetchGetMethod";

export default function MainBody() {

    const [data, setData] = useState<employeeData[] | null>(null);

    useFetchGetMethod("get-all-employees", "admin", (data: employeeData[] | null) => setData(data));
    
    return (
        <div>
            <SearchBox />
            <Table data={data} headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]} showAction={false}/>
        </div>
    )
}