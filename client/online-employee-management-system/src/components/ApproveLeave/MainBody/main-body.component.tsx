"use client";
import { useState, useEffect } from "react";
import styles from "./main-body.module.scss";
import Button from "@/components/Button/button.component";
import Table from "../../Table/table.component";
import SearchBox from "../../SearchBox/search-box.component";
import type { leaveData } from "@/constants/Types/response-data";
import { getUrl } from "../../../constants/url";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody() {

  const [data, setData] = useState<null |leaveData[]>(null);
  const token = useSelector((state: RootState) => state.authDetail.token);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${getUrl()}/get-all-leave-applications`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "role": "admin"
        },
      });
      const data = await response.json();
      setData(data.data);
      console.log("data: ", data);
    };
    fetchData();
  }, []);

  return (
    <div className={`${styles.mainContainer}`}>
      <SearchBox />
      <div className="flex gap-4">
        <div className="font-semibold text-2xl">Filter By : </div>
        <div>
          <Button>Approved</Button>
        </div>
        <div>
          <Button>Rejected</Button>
        </div>
      </div>
      <div className={`${styles.tableContainer} my-5`}>
        <Table data={data} headers={["Employee Name", "Regd.ID", "Email ID", "Designation", "Leave Type", "Date", "Action"]} showAction={true}/>
      </div>
    </div>
  );
}
