"use client";
import { useState } from "react";
import styles from "./form-contents.module.scss";
import RadioBtn from "@/components/RadioBtn/radio-btn.component";
import SetDate from "../SetDate/set-date.component";
import Link from "next/link";
import Button from "@/components/Button/button.component";
import { getUrl } from "@/constants/url";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type dataToSendType = {
    leaveType: string;
    fromDate: string | undefined;
    toDate: string | undefined;
    additionalInfo?: string;
}

export default function FormContents() {

  const { token } = useSelector((state: RootState) => state.authDetail);

    const [dataToSend, setDataToSend] = useState<dataToSendType>({
        leaveType: "",
        fromDate: "",
        toDate: "",
        additionalInfo: "",
    });

    const handleSubmit = () => {
      fetch(`${getUrl()}/apply-for-leave`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(dataToSend)
      })
    }

    console.log("dataToSend", dataToSend);

  return (
    <div className="">
      <div className="text-2xl font-semibold">Choose type of leave :</div>
      <div className="flex justify-evenly flex-wrap my-5">
        <RadioBtn label="Casual Leave" onRadioClick={() => setDataToSend({ ...dataToSend, leaveType: "casual" })} />
        <RadioBtn label="Pay Leave" onRadioClick={() => setDataToSend({ ...dataToSend, leaveType: "pay" })} />
        <RadioBtn label="Sick Leave" onRadioClick={() => setDataToSend({ ...dataToSend, leaveType: "sick" })} />
        <RadioBtn label="Maternity Leave" onRadioClick={() => setDataToSend({ ...dataToSend, leaveType: "maternity" })} />
      </div>
      <div className="text-2xl font-semibold">Set range</div>
      <div className="flex my-5">
        <SetDate updateDataToSend={(event) => setDataToSend({ ...dataToSend, fromDate: event.target.value})} label="From" />
        <SetDate updateDataToSend={(event) => setDataToSend({ ...dataToSend, toDate: event.target.value})} label="To" />
      </div>
      <div className="mt-12 mb-3">
        <label className="block mb-2 text-2xl font-semibold">
          Additional info : (Optional)
        </label>
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write additional info here..."
          onChange={(event) => setDataToSend({ ...dataToSend, additionalInfo: event.target.value })}
        ></textarea>
      </div>
      <div>
        <label></label>
        <div></div>
        <div className="flex items-center">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the{" "}
            <Link
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>
      </div>
      <div className={`${styles.submitBtnContainer} flex justify-end m-6`}>
        <Button
          onClick={() => console.log("submit")}
          customTW="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
