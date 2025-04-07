"use client";
import { useState } from "react";
import GiveResignation from "../GiveResignation/give-resignation.component";
import SearchBox from "@/components/SearchBox/search-box.component";
import ApproveResignation from "../ApproveResignation/approve-resignation.component";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import Toast from "@/components/Toast/toast.component";
import { getUrl } from "@/constants/url";
import type { employeeData } from "@/constants/Types/response-data";
import type { toastType } from "@/constants/Types/local";
import type { defaultData } from "@/constants/Types/response-data";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type dataToSendType = {
  reason: string;
};

export default function MainBody() {
  const [data, setData] = useState<defaultData[] | null>(null);
  const [dataToSend, setDataToSend] = useState<dataToSendType>({
    reason: "",
  });
  const [toast, setToast] = useState<toastType>({ show: false, message: "" });
  const [searchResults, setSearchResults] = useState<employeeData[]>([]);
  const [searchData, setSearchData] = useState<string>("");

  const { role, token } = useSelector((state: RootState) => state.authDetail);

  useFetchGetMethod(
    "get-all-resign-applications",
    "admin",
    (data: defaultData[] | null) => setData(data),
    true
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

  const handleSearch = () => {
    if (!data) return;
    const localData: employeeData[] = data.filter((item) =>
      item.firstName.includes(searchData)
    );
    console.log("searching: ", searchData);
    setSearchResults(localData);
  };

  console.log(dataToSend);

  return (
    <div className="font-times px-4 py-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b bg-gray-100">
      <Toast
        show={toast.show}
        hide={() => setToast({ show: false, message: "" })}
        message={toast.message}
      />

      <div className="mx-auto">
        {role === "admin" ? (
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              🗂️ Resignation Requests
            </h1>

            <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 border border-gray-100">
              <SearchBox
                updateSearchData={(data: string) => setSearchData(data)}
                startSearch={handleSearch}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <ApproveResignation
                data={searchResults.length > 0 ? searchResults : data}
                handleAction={handleAction}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              📩 Give Resignation
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <GiveResignation
                updateDataToSend={(e) =>
                  setDataToSend({ ...dataToSend, reason: e })
                }
                submit={handleGiveResignation}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
