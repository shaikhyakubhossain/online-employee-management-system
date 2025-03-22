"use client";
import { useState } from "react";
// import styles from "./form-contents.module.scss";
// import RadioBtn from "@/components/RadioBtn/radio-btn.component";
import SetDate from "../SetDate/set-date.component";
import Link from "next/link";
import Button from "@/components/Button/button.component";
import Toast from "@/components/Toast/toast.component";
import { getUrl } from "@/constants/url";
import type { toastType } from "@/constants/Types/local";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type dataToSendType = {
  leaveType: string;
  fromDate: string | undefined;
  toDate: string | undefined;
  additionalInfo?: string;
};

export default function FormContents() {
  const { token } = useSelector((state: RootState) => state.authDetail);
  const { data } = useSelector((state: RootState) => state.authDetail);

  const [dataToSend, setDataToSend] = useState<dataToSendType>({
    leaveType: "",
    fromDate: "",
    toDate: "",
    additionalInfo: "",
  });
  const [toast, setToast] = useState<toastType>({ show: false, message: "" });
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (
      dataToSend.leaveType === "" ||
      dataToSend.fromDate === "" ||
      dataToSend.toDate === ""
    ) {
      setToast({ show: true, message: "Please fill all the fields" });
    }
    if (!data) {
      setToast({ show: true, message: "Please login to apply for leave" });
    } else {
      fetch(`${getUrl()}/apply-leave`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          role: "employee",
        },
        body: JSON.stringify({
          leaveType: dataToSend.leaveType,
          leaveDateFrom: dataToSend.fromDate,
          leaveDateTo: dataToSend.toDate,
          additionalInfo: dataToSend.additionalInfo,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          setToast({ show: true, message: data.error ? data.error : data.message });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  console.log(dataToSend);

 return (
   <div className="p-6 bg-gray-100 rounded-xl shadow-md">
     <Toast
       show={toast.show}
       hide={() => setToast({ show: false, message: "" })}
       message={toast.message}
     />
     <div className="text-2xl font-semibold text-gray-800 mb-4">
       Choose Leave Type
     </div>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {[
         { label: "Casual Leave", value: "casual" },
         { label: "Pay Leave", value: "pay" },
         { label: "Sick Leave", value: "sick" },
         { label: "Maternity Leave", value: "maternity" },
       ].map((option, index) => (
         <label
           key={index}
           className="flex items-center gap-3 p-4 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition-all duration-200"
         >
           <input
             type="radio"
             name="leaveType"
             value={option.value}
             className="accent-blue-600"
             onChange={() =>
               setDataToSend({ ...dataToSend, leaveType: option.value })
             }
           />
           <span className="text-gray-700 font-medium">{option.label}</span>
         </label>
       ))}
     </div>
     <div className="text-2xl font-semibold text-gray-800 mt-6">
       Select Date Range
     </div>
     <div className="flex flex-col md:flex-row gap-4 mt-4">
       <SetDate
         updateDataToSend={(event) =>
           setDataToSend({ ...dataToSend, fromDate: event.target.value })
         }
         label="From"
       />
       <SetDate
         updateDataToSend={(event) =>
           setDataToSend({ ...dataToSend, toDate: event.target.value })
         }
         label="To"
       />
     </div>
     <div className="mt-6">
       <label className="block mb-2 text-2xl font-semibold text-gray-800">
         Additional Information (Optional)
       </label>
       <textarea
         rows={7}
         className="block w-full p-3 text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
         placeholder="Describe us in brief, why are you applying for this leave..."
         onChange={(event) =>
           setDataToSend({ ...dataToSend, additionalInfo: event.target.value })
         }
       ></textarea>
     </div>
     <div className="mt-6">
       <label className="block mb-2 text-2xl font-semibold text-gray-800">
         Declaration
       </label>
       <p className="text-gray-700">
         I hereby declare that all the provided details are true to my
         knowledge. The approval of this application is subject to management’s
         discretion as per the employee leave policy.
       </p>
       <div className="flex items-center mt-3">
         <input
           type="checkbox"
           checked={isChecked}
           onChange={(e) => setIsChecked(e.target.checked)}
           className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
         />
         <label className="ml-2 text-sm text-gray-800">
           I agree to the{" "}
           <Link href="#" className="text-blue-600 hover:underline">
             terms and conditions
           </Link>
           .
         </label>
       </div>
       {!isChecked && showError && (
         <p className="text-red-500 text-sm mt-2">
           You must agree to continue.
         </p>
       )}
     </div>
     <div className="flex justify-end mt-8">
       <Button
         onClick={() => {
           if (!isChecked) {
             setShowError(true);
             return;
           }
           handleSubmit();
         }}
         customTW={`py-2 px-6 rounded-lg shadow-md transition-all duration-200 font-semibold ${
           isChecked
             ? "bg-blue-600 hover:bg-blue-700 text-white"
             : "bg-gray-400 cursor-not-allowed text-gray-200"
         }`}
       >
         Submit
       </Button>
     </div>
   </div>
 );




}
