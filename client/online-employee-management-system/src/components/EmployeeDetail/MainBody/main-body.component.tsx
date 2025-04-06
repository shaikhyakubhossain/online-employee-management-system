"use client";
// import styles from "./main-body.module.scss";
import { useState } from "react";
import SearchBox from "@/components/SearchBox/search-box.component";
import Button from "@/components/Button/button.component";
import Table from "@/components/Table/table.component";
import type { employeeData } from "@/constants/Types/response-data";
import { btnList2 } from "@/constants/Basic/data";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import DetailModal from "@/components/DetailModal/detail-modal.component";

export default function MainBody() {
  const [data, setData] = useState<employeeData[] | null>(null);
  const [modalDetailToShow, setModalDetailToShow] =
    useState<employeeData | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<employeeData[]>([]);
  const [searchData, setSearchData] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useFetchGetMethod(
    `get-all-employees`,
    "admin",
    (data: employeeData[] | null) => setData(data),
    false,
    page
  );

  console.log(data);

  const handleSearch = () => {
    if (!data) return;
    const localData: employeeData[] = data.filter((item) =>
      item.firstName.includes(searchData)
    );
    // console.log("searching: ", searchData);
    setSearchResults(localData);
  };

  return (
    <div>
      {showModal && (
        <DetailModal
          data={modalDetailToShow}
          hide={() => setShowModal(false)}
        />
      )}
      <SearchBox
        updateSearchData={(data: string) => setSearchData(data)}
        startSearch={handleSearch}
      />
      <Table
        handleRowDetailToShowInModal={(row) => {
          setModalDetailToShow(row);
          setShowModal(true);
        }}
        data={searchResults.length > 0 ? searchResults : data}
        headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]}
        showAction={false}
      />
      <div className="flex justify-center items-center gap-3">
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <img src={btnList2[1].base64Icon} alt="" />
        </Button>
        <div>
          <input
            className="clean-number-input w-12 text-center"
            type="number"
            defaultValue={page}
            value={page}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= 1 && value <= 1000) {
                setPage(parseInt(e.target.value));
              }
            }}
          />
        </div>
        <Button
          disabled={page === 1000}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <img className="rotate-180" src={btnList2[1].base64Icon} alt="" />
        </Button>
      </div>
      {/* <div className="flex justify-center items-center pt-5"><Button onClick={() => setPage(prev => prev + 1)}>Load More</Button></div> */}
    </div>
  );
}
