"use client";
import { useState } from "react";
import styles from "./main-body.module.scss";
import Button from "@/components/Button/button.component";
import Table from "../../Table/table.component";
import SearchBox from "../../SearchBox/search-box.component";
import type { leaveData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchGetMethod/useFetchGetMethod";
import { getUrl } from "@/constants/url";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody() {

  const token = useSelector((state: RootState) => state.authDetail.token);
  const [data, setData] = useState<leaveData[] | null>(null);

  useFetchGetMethod("get-all-leave-applications", "admin", (data: leaveData[] | null) => setData(data));

  const handleAction = async (id: string, action: string) => {
    const response = await fetch(`${getUrl()}/leave-action`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        role: "admin",
      },
      body: JSON.stringify({ _id: id, action: action }),
    });
    const data = await response.json();
    console.log("data: ", data);
  };

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
        <Table
          data={data}
          headers={[
            "Employee Name",
            "Regd.ID",
            "Email ID",
            "Designation",
            "Leave Type",
            "Date",
            "Status",
            "Action",
          ]}
          showAction={true}
          handleAction={handleAction}
        />
      </div>
    </div>
  );
}
