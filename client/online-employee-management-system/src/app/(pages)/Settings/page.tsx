"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader/page-header.component";
import { getUrl } from "@/constants/url";
import Button from "@/components/Button/button.component";
import Toast from "@/components/Toast/toast.component";
import InputField from "@/components/InputField/Input-field.component";
import type { toastType } from "@/constants/Types/local";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Settings() {

  const { token, role } = useSelector((state: RootState) => state.authDetail);

  const [dataToSend, setDataToSend] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    role
  });
  
  const [toast, setToast] = useState<toastType>({ show: false, message: "" });

  const handleSubmit = async () => {
    const response = await fetch(`${getUrl()}/change-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        role: "both",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();
    setToast({ show: true, message: data.message ? data.message : data.error });
  };

  return (
    <div className="font-times py-10 px-4">
      <Toast
        show={toast.show}
        hide={() => setToast({ show: false, message: "" })}
        message={toast.message}
      />
      <PageHeader title="Settings" />

      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <form action="">
          <label className="block text-gray-700 text-lg font-semibold mb-6 text-center">
            🔒 Change Password
          </label>
            <InputField
              type="password"
              placeholder="Old Password"
              required={true}
              updateDataToSend={(data) =>
                setDataToSend({ ...dataToSend, oldPassword: data })
              }
            />
            <InputField
              type="password"
              placeholder="New Password"
              required={true}
              updateDataToSend={(data) =>
                setDataToSend({ ...dataToSend, newPassword: data })
              }
            />
            <InputField
              type="password"
              placeholder="Confirm Password"
              required={true}
              updateDataToSend={(data) =>
                setDataToSend({ ...dataToSend, confirmPassword: data })
              }
            />
            <Button onClick={handleSubmit}>Change Password</Button>
        </form>
      </div>
    </div>
  );
}
