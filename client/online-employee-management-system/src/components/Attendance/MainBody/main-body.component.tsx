"use client";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import Table from "@/components/Table/table.component";
import DetailModal from "@/components/DetailModal/detail-modal.component";
import { getUrl } from "@/constants/url";
import { useState } from "react";
import type { defaultData } from "@/constants/Types/response-data";
import SearchBox from "@/components/SearchBox/search-box.component";
import TotalCounter from "@/components/TotalCounter/total-counter.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import Loader from "@/components/Loader/loader.component";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type serverData = {
  data: defaultData[] | null;
  pageCount: number;
};

export default function MainBody(): JSX.Element {
  const [data, setData] = useState<serverData | null>(null);
  const [modalDetailToShow, setModalDetailToShow] =
      useState<defaultData | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const { token } = useSelector((state: RootState) => state.authDetail);

  useFetchGetMethod(
    "get-all-attendances",
    "both",
    (data: serverData | null) => setData(data),
    false,
    page,
    searchData
  );
  console.log(data);

  const downloadCSV = async () => {
    try{
      const response = await fetch(`${getUrl()}/get-attendance-csv`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
          role: "both",
        },
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "attendance.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
    catch(e){
      console.error(e);
    }
  }
  

  return (
    <div>
      {showModal && (
              <DetailModal
                data={modalDetailToShow}
                hide={() => setShowModal(false)}
              />
            )}
      <SearchBox updateSearchData={setSearchData} />
      <TotalCounter title="Total no. of employee present today" pageCount={data && data.pageCount} />
      {data && data.data && data.data.length > 0 ? (
        <div>
          <div className="mb-4">
            <button
              onClick={downloadCSV}
              className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2"
            >
              Download CSV
            </button>
          </div>
          <Table
          handleRowDetailToShowInModal={(row) => {
            setModalDetailToShow(row);
            setShowModal(true);
          }}
            headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]}
            data={data && data.data}
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
        <Loader title={"No data found"} />
      )}
    </div>
  );
}
