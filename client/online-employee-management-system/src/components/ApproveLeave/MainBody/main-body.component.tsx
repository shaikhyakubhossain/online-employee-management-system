"use client";
import { useState } from "react";
import styles from "./main-body.module.scss";
import Button from "@/components/Button/button.component";
import Table from "../../Table/table.component";
import SearchBox from "../../SearchBox/search-box.component";
import type { employeeData } from "@/constants/Types/response-data";
import type { leaveData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import { getUrl } from "@/constants/url";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody() {
  const token = useSelector((state: RootState) => state.authDetail.token);
  const [data, setData] = useState<leaveData[] | null>(null);
  const [searchResults, setSearchResults] = useState<employeeData[]>([]);
  const [searchData, setSearchData] = useState<string>("");

  useFetchGetMethod(
    "get-all-leave-applications",
    "admin",
    (data: leaveData[] | null) => setData(data),
    true
  );

  const handleSearch = () => {
    if (!data) return;
    const localData: employeeData[] = data.filter((item) => item.firstName.includes(searchData));
    console.log("searching: ", searchData);
    setSearchResults(localData);
  };

  const handleAction = async (id: string, action: string) => {
    console.log("hi")
    const response = await fetch(`${getUrl()}/leave-action`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        role: "admin",
      },
      body: JSON.stringify({ _id: id, action: action }),
    });
    console.log("here")
    const data = await response.json();
    console.log("data: ", data);
    window.location.reload();
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <SearchBox updateSearchData={(data: string) => setSearchData(data)} startSearch={handleSearch} />
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
          data={searchResults.length > 0 ? searchResults : data}
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
    </div>
  );
}
