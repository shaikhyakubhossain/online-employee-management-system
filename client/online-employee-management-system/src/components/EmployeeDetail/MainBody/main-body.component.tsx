"use client";
// import styles from "./main-body.module.scss";
import { useState } from "react";
import SearchBox from "@/components/SearchBox/search-box.component";
import Table from "@/components/Table/table.component";
import type { employeeData } from "@/constants/Types/response-data";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import DetailModal from "@/components/DetailModal/detail-modal.component";

export default function MainBody() {
  const [data, setData] = useState<employeeData[] | null>(null);
  const [modalDetailToShow, setModalDetailToShow] = useState<employeeData | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<employeeData[]>([]);
  const [searchData, setSearchData] = useState<string>("");

  useFetchGetMethod(
    "get-all-employees",
    "admin",
    (data: employeeData[] | null) => setData(data)
  );

  console.log(data)

  const handleSearch = () => {
    if (!data) return;
    const localData: employeeData[] = data.filter((item) => item.firstName.includes(searchData));
    // console.log("searching: ", searchData);
    setSearchResults(localData);
  };

  return (
    <div>
      {showModal && <DetailModal data={modalDetailToShow} hide={() => setShowModal(false)}/>}
      <SearchBox updateSearchData={(data: string) => setSearchData(data)} startSearch={handleSearch} />
      <Table
        handleRowDetailToShowInModal={(row) => {setModalDetailToShow(row); setShowModal(true)}}
        data={searchResults.length > 0 ? searchResults : data}
        headers={["Employee Name", "Regd.ID", "Email ID", "Designation"]}
        showAction={false}
      />
    </div>
  );
}
