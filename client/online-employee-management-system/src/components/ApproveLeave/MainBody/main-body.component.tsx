"use client";
import { useState } from "react";
import styles from "./main-body.module.scss";
import Button from "@/components/Button/button.component";
import Table from "../../Table/table.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import SearchBox from "../../SearchBox/search-box.component";
import type { leaveData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import { getUrl } from "@/constants/url";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type serverData = {
  data: leaveData[];
  pageCount: number | null;
};

export default function MainBody() {
  const token = useSelector((state: RootState) => state.authDetail.token);
  const [data, setData] = useState<serverData | null>(null);
  const [searchData, setSearchData] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  useFetchGetMethod(
    "get-all-leave-applications",
    "admin",
    (data: serverData | null) => setData(data),
    true,
    page,
    searchData
  );
  console.log("data: ", data);

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
    window.location.reload();
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <SearchBox updateSearchData={(data: string) => setSearchData(data)} />
      <div className="flex gap-4">
        <div className="font-semibold text-2xl">Filter By : </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <Button>Approved</Button>
          </div>
          <div>
            <Button>Rejected</Button>
          </div>
        </div>
      </div>
      <div className={`${styles.tableContainer} my-5`}>
        <Table
          data={data && data.data}
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
          isLeave={true}
          handleAction={handleAction}
        />
      </div>
      <PaginationBar
        page={page}
        pageCount={data && data.pageCount}
        incrementPage={(value) => setPage(value)}
        decrementPage={(value) => setPage(value)}
        setCustomPage={(value) => setPage(value)}
      />
    </div>
  );
}
