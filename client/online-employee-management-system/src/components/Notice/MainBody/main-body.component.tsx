"use client";
import Section from "../Section/section.component";
import { useState } from "react";
import type { noticeData } from "@/constants/Types/response-data";
import { getUrl } from "@/constants/url";
import useFetchGetMethod from "@/hooks/FetchMethods/useFetchGetMethod";
import AddNotice from "../AddNotice/add-notice.component copy";
import PaginationBar from "@/components/PaginationBar/pagination-bar.component";
import Toast from "@/components/Toast/toast.component";
import type { toastType } from "@/constants/Types/local";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type serverData = {
  data: noticeData[] | null;
  pageCount: number;
}

export default function MainBody() {

    const [dataToSend, setDataToSend] = useState<noticeData>({
        title: "",
        message: ""
    });
    const [data, setData] = useState<serverData | null>(null);
    const [dataLatest, setDataLatest] = useState<serverData | null>(null);
    const [toast, setToast] = useState<toastType>({ show: false, message: "" });
    const [page, setPage] = useState<number>(0);
    const { role, token } = useSelector((state: RootState) => state.authDetail);

    useFetchGetMethod(
        "get-all-notices",
        "both",
        (data: serverData | null) => setData(data),
        true,
        page
    );

    useFetchGetMethod(
      "get-all-notices",
      "both",
      (data: serverData | null) => setDataLatest(data),
      true
  );

    const handleAddNotice = () => {
        sendData();
    }

    console.log(data);

    const sendData = () => {
        fetch(`${getUrl()}/add-notice`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                role: "admin",
            },
            body: JSON.stringify(dataToSend),
        }).then((res) => res.json()).then((data) => {
            setToast({ show: true, message: data.message ? data.message : data.error });
        window.location.reload();
        })
    }

    console.log(data);
    
    return (
      <div className="p-6 bg-gray-100">
        <Toast
          show={toast.show}
          hide={() => setToast({ show: false, message: "" })}
          message={toast.message}
        />
        {role === "admin" && (
          <AddNotice
            updateTitle={(data: string) =>
              setDataToSend({ ...dataToSend, title: data })
            }
            updateMessage={(data: string) =>
              setDataToSend({ ...dataToSend, message: data })
            }
            handleAddNotice={handleAddNotice}
          />
        )}
        <Section title="Latest Notices" data={dataLatest  && dataLatest.data && dataLatest.data.slice(0, 5)} />
        <Section title="Other Notices" data={data && data.data} />
        <PaginationBar
          page={page}
          pageCount={data && data.pageCount}
          incrementPage={setPage}
          decrementPage={setPage}
          setCustomPage={setPage}
        />
      </div>
    );
}