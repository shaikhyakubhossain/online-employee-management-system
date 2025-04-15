"use client";
import { useState } from "react";
import styles from "./main-body.module.scss";
import FilterBar from "@/components/FilterBar/filter-bar.component";
import Table from "../../Table/table.component";
import TotalCounter from "../../TotalCounter/total-counter.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import Loader from "@/components/Loader/loader.component";
import DetailModal from "@/components/DetailModal/detail-modal.component";
import SearchBox from "../../SearchBox/search-box.component";
import type { leaveData, employeeData } from "@/constants/Types/response-data";
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
  const [modalDetailToShow, setModalDetailToShow] =
      useState<employeeData | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
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
      {showModal && (
              <DetailModal
                data={modalDetailToShow}
                additionalInfo={data && data.data[0].additionalInfo}
                hide={() => setShowModal(false)}
              />
            )}
      <SearchBox updateSearchData={setSearchData} />
      <TotalCounter title={"Total Leaves"} pageCount={data && data.pageCount} />
      <FilterBar updateSearchData={setSearchData} />
      <div className={`${styles.tableContainer} my-5`}>
        {data && data.data && data.data.length > 0 ? (
          <div>
            <Table
            handleRowDetailToShowInModal={(row) => {
              setModalDetailToShow(row);
              setShowModal(true);
            }}
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
            <PaginationBar
              page={page}
              pageCount={data && data.pageCount}
              incrementPage={setPage}
              decrementPage={setPage}
              setCustomPage={setPage}
            />
          </div>
        ) : data === null ? (
          <Loader title={"Loading..."} />
        ) : (
          <Loader title={"No data found!"} />
        )}
      </div>
    </div>
  );
}
