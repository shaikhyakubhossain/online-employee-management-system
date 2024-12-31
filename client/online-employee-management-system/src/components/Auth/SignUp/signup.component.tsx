"use client";
import styles from "./signup.module.scss";
import { useState, useRef } from "react";
import InputField from "../InputField/Input-field.component";
import Button from "@/components/Button/button.component";
import RadioBtn from "@/components/RadioBtn/radio-btn.component";
import Link from "next/link";
import Toast from "@/components/Toast/toast.component";
import { getUrl } from "@/constants/url";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";
import {
  setStartLoadingTrue,
  setStartLoadingFalse,
} from "@/lib/features/MainLoading/mainLoadingSlice";

type dataToSendType = {
  firstName: string;
  lastName: string;
  username: string;
  designation: string;
  regdNo: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  secretCode: string;
};

export default function SignUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [dataToSend, setDataToSend] = useState<dataToSendType>({
    firstName: "",
    lastName: "",
    username: "",
    designation: "",
    regdNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    secretCode: "",
  });
  const [toast, setToast] = useState<boolean>(false);

  const errorMessageRef = useRef<string | null>(null);

  const handleRoleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = event.target as HTMLInputElement;
    if (current.nextSibling && current.nextSibling.textContent) {
      setDataToSend({
        ...dataToSend,
        role: current.nextSibling.textContent.toLowerCase(),
      });
    }
  };

  const fetchData = async () => {
    fetch(`${getUrl()}/${dataToSend.role}-signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch(setStartLoadingFalse());
          errorMessageRef.current = data.error;
          setToast(true);
        } else {
          dispatch(setStartLoadingFalse());
          console.log(data);
          dispatch(setDetail(data));
          localStorage.setItem("OEMS-authDetail", JSON.stringify(data));
          router.push(`/Dashboard`);
        }
        console.log(data);
      });
  };

  const handleSubmit = () => {
    if (dataToSend.role === "") {
      errorMessageRef.current = "Please select role";
      setToast(true);
    } else {
      dispatch(setStartLoadingTrue());
      fetchData();
    }
  };

  return (
    <div
      className={`${styles.mainContainer} text-center flex flex-col p-5 sm:p-10 lg:p-20 justify-center`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <Toast show={toast} message={errorMessageRef.current} hide={() => setToast(false)} />
      <div className="mx-auto w-full">
        <div className="text-2xl sm:text-3xl mb-2">New user? Register here</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 justify-center items-start">
          <div className="col-span-1 mb-4 sm:mb-0">
            <div
              className={`${styles.roleSelection} flex flex-wrap justify-center text-white`}
            >
              <RadioBtn
                label="Admin"
                onRadioClick={(event) => handleRoleSelection(event)}
              />
              <RadioBtn
                label="Employee"
                onRadioClick={(event) => handleRoleSelection(event)}
              />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 bg-blue-300 rounded p-4 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, firstName: event })
                }
                label="First name"
                type="text"
                placeholder="Enter First name"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, lastName: event })
                }
                label="Last name"
                type="text"
                placeholder="Enter Last name"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, username: event })
                }
                label="Username"
                type="text"
                placeholder="Enter Username"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, designation: event })
                }
                label="Designation"
                type="text"
                placeholder="Enter Designation"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, regdNo: event })
                }
                label="Regd. No"
                type="text"
                placeholder="Enter Regd. No"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, email: event })
                }
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, password: event })
                }
                label="Create password"
                type="password"
                placeholder="Enter password"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, confirmPassword: event })
                }
                label="Re-enter password"
                type="password"
                placeholder="Re-enter password"
              />
              <InputField
                updateDataToSend={(event) =>
                  setDataToSend({ ...dataToSend, secretCode: event })
                }
                label="Secret Code"
                type="text"
                placeholder="Enter Secret Code"
              />
            </div>
            <div className="mt-4">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          I already have an account. Click here to &nbsp;
          <Link
            className="text-blue-200 login"
            href={"/Auth?type=login&role=employee"}
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
