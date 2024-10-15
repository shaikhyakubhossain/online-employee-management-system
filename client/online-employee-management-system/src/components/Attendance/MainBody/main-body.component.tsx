"use client";
import Table from "@/components/Table/table.component";
import { useState } from "react";

export default function MainBody(): JSX.Element {

    const [data] = useState([]);

    return (
        <div>
            <Table headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]} data={data} />
        </div>
    )
}