"use client";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import Table from "@/components/Table/table.component";
import { useState } from "react";

type serverData = {
    data: any;
    pageCount: number
}

export default function MainBody(): JSX.Element {

    const [data, setData] = useState<serverData | null>(null);
    const [page, setPage] = useState<number>(0);

    useFetchGetMethod(
        "get-all-attendances",
        "both",
        (data: any) => setData(data),
        false,
        page
    );
    console.log(data);

    return (
        <div>
            <Table headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]} data={data && data.data} />
        </div>
    )
}