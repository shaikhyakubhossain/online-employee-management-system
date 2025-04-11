"use client";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import Table from "@/components/Table/table.component";
import { useState } from "react";
import type { defaultData } from "@/constants/Types/response-data";
import SearchBox from "@/components/SearchBox/search-box.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import Loader from "@/components/Loader/loader.component";

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

  return (
    <div>
      <SearchBox updateSearchData={setSearchData} />
      {data && data.data && data.data.length > 0 ? (
        <div>
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
      ) : data === null ?(
              <Loader title={"Loading..."} />
            ) : (
            <Loader title={"No data found"} />
            )}
    </div>
  );
}
