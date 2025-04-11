"use client";
import { useState } from "react";
import GiveResignation from "../GiveResignation/give-resignation.component";
import SearchBox from "@/components/SearchBox/search-box.component";
import ApproveResignation from "../ApproveResignation/approve-resignation.component";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import Toast from "@/components/Toast/toast.component";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import Loader from "@/components/Loader/loader.component";
import { getUrl } from "@/constants/url";
import type { toastType } from "@/constants/Types/local";
import type { defaultData } from "@/constants/Types/response-data";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type dataToSendType = {
  reason: string;
};

type serverData = {
  data: defaultData[] | null;
  pageCount: number;
};

export default function MainBody() {
  const [data, setData] = useState<serverData | null>(null);
  const [dataToSend, setDataToSend] = useState<dataToSendType>({
    reason: "",
  });
  const [toast, setToast] = useState<toastType>({ show: false, message: "" });
  // const [searchResults, setSearchResults] = useState<employeeData[]>([]);
  const [searchData, setSearchData] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const { role, token } = useSelector((state: RootState) => state.authDetail);

  useFetchGetMethod(
    "get-all-resign-applications",
    "admin",
    (data: serverData | null) => setData(data),
    true,
    page,
    searchData
  );

  const handleGiveResignation = () => {
    fetch(`${getUrl()}/add-resign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        role: "employee",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        setToast({
          show: true,
          message: data.message ? data.message : data.error,
        });
      });
  };

  const handleAction = async (id: string, action: string) => {
    const response = await fetch(`${getUrl()}/resign-action`, {
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

  console.log(dataToSend);

  return (
    <div className="font-times px-4 py-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b bg-gray-100">
      <Toast
        show={toast.show}
        hide={() => setToast({ show: false, message: "" })}
        message={toast.message}
      />
      {role === "admin" ? (
        <>
          <SearchBox updateSearchData={(data: string) => setSearchData(data)} />
          {data && data.data && data.data.length > 0 ? (
            <div>
              <ApproveResignation
                data={data && data.data}
                handleAction={handleAction}
              />
              <PaginationBar
                page={page}
                pageCount={data && data.pageCount}
                incrementPage={(value) => setPage(value)}
                decrementPage={(value) => setPage(value)}
                setCustomPage={(value) => setPage(value)}
              />
            </div>
          ) : data === null ?(
                  <Loader title={"Loading..."} />
                ) : (
                <Loader title={"No data found"} />
                )}
        </>
      ) : (
        <GiveResignation
          updateDataToSend={(e) => setDataToSend({ ...dataToSend, reason: e })}
          submit={handleGiveResignation}
        />
      )}
    </div>
  );
}
