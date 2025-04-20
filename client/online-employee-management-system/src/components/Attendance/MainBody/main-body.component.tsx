"use client";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import Table from "@/components/Table/table.component";
import DetailModal from "@/components/DetailModal/detail-modal.component";
import CsvDownload from "@/components/CsvDownload/csv-download";
import { useState } from "react";
import type { defaultData } from "@/constants/Types/response-data";
import SearchBox from "@/components/SearchBox/search-box.component";
import TotalCounter from "@/components/TotalCounter/total-counter.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import Loader from "@/components/Loader/loader.component";

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

  useFetchGetMethod(
    "get-all-attendances",
    "both",
    (data: serverData | null) => setData(data),
    false,
    page,
    searchData
  );

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
          <CsvDownload collectionName="attendance" />
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
