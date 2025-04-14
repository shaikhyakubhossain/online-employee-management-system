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
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Settings() {
  const { token, role } = useSelector((state: RootState) => state.authDetail);

  const [dataToSend, setDataToSend] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    role,
  });

  const [toast, setToast] = useState<toastType>({ show: false, message: "" });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const togglePasswordVisibility = (type: string) => {
    if (type === "old") {
      setShowOldPassword(!showOldPassword);
    } else if (type === "new") {
      setShowNewPassword(!showNewPassword);
    } else if (type === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="font-times px-4">
      <Toast
        show={toast.show}
        hide={() => setToast({ show: false, message: "" })}
        message={toast.message}
      />
      <PageHeader title="Settings" />

      <div className="w-full mx-auto bg-gray-100 p-6 rounded-xl shadow border border-gray-200">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <form action="">
            <label className="block text-gray-700 text-lg font-semibold mb-6 text-center">
              🔒 Change Password
            </label>

            <div className="relative mb-6">
              <InputField
                type={showOldPassword ? "text" : "password"}
                placeholder="Old Password"
                required={true}
                updateDataToSend={(data) =>
                  setDataToSend({ ...dataToSend, oldPassword: data })
                }
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordVisibility("old")}
              >
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="relative mb-6">
              <InputField
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                required={true}
                updateDataToSend={(data) =>
                  setDataToSend({ ...dataToSend, newPassword: data })
                }
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordVisibility("new")}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="relative mb-6">
              <InputField
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required={true}
                updateDataToSend={(data) =>
                  setDataToSend({ ...dataToSend, confirmPassword: data })
                }
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordVisibility("confirm")}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <Button onClick={handleSubmit}>Change Password</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
