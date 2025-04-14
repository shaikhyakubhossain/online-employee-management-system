"use client";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import Table from "@/components/Table/table.component";
import { useState } from "react";
import type { defaultData } from "@/constants/Types/response-data";
import SearchBox from "@/components/SearchBox/search-box.component";
import TotalCounter from "@/components/TotalCounter/total-counter.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import Loader from "@/components/Loader/loader.component";
import * as XLSX from "xlsx";

type serverData = {
  data: defaultData[] | null;
  pageCount: number;
};

export default function MainBody(): JSX.Element {
  const [data, setData] = useState<serverData | null>(null);
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
  console.log(data);

  // Function to download data as CSV
  const downloadCSV = () => {
    if (!data?.data) return;
    const headers = [
      "First Name",
      "Last Name",
      "Regd No",
      "Email",
      "Designation",
    ];
    const rows = data.data.map((attendance) => [
      attendance.firstName, // First Name
      attendance.lastName, // Last Name
      attendance.regdNo, // Registration No
      attendance.email, // Email
      attendance.designation, // Designation
    ]);

    // Adding the headers as the first row
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    // Creating a downloadable link and triggering the download
    const link = document.createElement("a");
    link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
    link.target = "_blank";
    link.download = "attendance.csv";
    link.click();
  };

  // Function to download data as Excel
  const downloadExcel = () => {
    if (!data?.data) return;
    const rows = data.data.map((attendance) => ({
      "First Name": attendance.firstName,
      "Last Name": attendance.lastName,
      "Regd No": attendance.regdNo,
      Email: attendance.email,
      Designation: attendance.designation,
    }));

    // Create a new workbook and add a worksheet
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance");

    // Trigger the download
    XLSX.writeFile(wb, "attendance.xlsx");
  };

  return (
    <div>
      <SearchBox updateSearchData={setSearchData} />
      <TotalCounter title="Total Attendance" pageCount={data && data.pageCount} />
      {data && data.data && data.data.length > 0 ? (
        <div>
          <div className="text-xl mb-4">
            Today&apos;s Attendance:{" "}
            <span className="text-3xl font-bold text-blue-600">
              {data.data.length * data.pageCount}
            </span>{" "}
            employee(s).
          </div>

          {/* Download buttons */}
          <div className="mb-4">
            <button
              onClick={downloadCSV}
              className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2"
            >
              Download CSV
            </button>
            <button
              onClick={downloadExcel}
              className="px-4 py-2 bg-green-600 text-white rounded-md"
            >
              Download Excel
            </button>
          </div>

          <Table
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
