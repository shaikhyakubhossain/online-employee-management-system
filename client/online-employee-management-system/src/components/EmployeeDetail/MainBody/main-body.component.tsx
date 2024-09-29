import styles from "./main-body.module.scss";
import { useState } from "react";
import SearchBox from "@/components/SearchBox/search-box.component";
import Table from "@/components/Table/table.component";

export default function MainBody() {
    const [data, setData] = useState<any>([]);
    
    return (
        <div>
            <SearchBox />
            <Table data={[]} headers={["Employee Name", "Regd.ID", "Email ID", "Designation", "Date"]}/>
        </div>
    )
}