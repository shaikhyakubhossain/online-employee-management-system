"use client";
// import styles from "./main-body.module.scss";
import { useState, useEffect } from "react";
import SearchBox from "@/components/SearchBox/search-box.component";
import Table from "@/components/Table/table.component";
import type { employeeData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import DetailModal from "@/components/DetailModal/detail-modal.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import NoDataFound from "@/components/NoDataFound/no-data-found.component";

type serverData = {
  data: employeeData[];
  pageCount: number | null;
};

export default function MainBody() {
  const [data, setData] = useState<serverData | null>(null);
  const [modalDetailToShow, setModalDetailToShow] =
    useState<employeeData | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  useFetchGetMethod(
    `get-all-employees`,
    "admin",
    (data: serverData | null) => setData(data),
    false,
    page,
    searchData
  );

  useEffect(() => {
    setPage(0);
  }, [searchData]);

  console.log(data);

  return (
    <div>
      {showModal && (
        <DetailModal
          data={modalDetailToShow}
          hide={() => setShowModal(false)}
        />
      )}
      <SearchBox updateSearchData={(data: string) => setSearchData(data)} />
      {data && data.data.length > 0 ? (
        <div>
          <Table
            handleRowDetailToShowInModal={(row) => {
              setModalDetailToShow(row);
              setShowModal(true);
            }}
            data={data && data.data}
            headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]}
            showAction={false}
          />
          <PaginationBar
            page={page}
            pageCount={data && data.pageCount}
            incrementPage={(value) => setPage(value)}
            decrementPage={(value) => setPage(value)}
            setCustomPage={(value) => setPage(value)}
          />
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
}
