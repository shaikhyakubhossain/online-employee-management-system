"use client";
import styles from "./signup.module.scss";
import { useState } from "react";
import InputField from "../InputField/Input-field.component";
import Button from "@/components/Button/button.component";
import RadioBtn from "@/components/RadioBtn/radio-btn.component";
import { getUrl } from "@/constants/url";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";
import {
  setStartLoadingTrue,
  setStartLoadingFalse,
} from "@/lib/features/MainLoading/mainLoadingSlice";

export default function SignUp() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [dataToSend, setDataToSend] = useState({
    firstName: "",
    lastName: "",
    username: "",
    designation: "",
    regdNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  })

  const handleRoleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = event.target as HTMLInputElement;
    if (current.nextSibling && current.nextSibling.textContent) {
      setDataToSend({ ...dataToSend, role: current.nextSibling.textContent.toLowerCase()});
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
        if(data.error) {
          dispatch(setStartLoadingFalse());
          alert(data.error);
        }
        else{
          dispatch(setStartLoadingFalse());
          dispatch(setDetail(data));
          localStorage.setItem("authDetail", JSON.stringify(data));
          router.push(`/Dashboard`);
        }
        console.log(data);
      });
  };

  const handleSubmit = () => {
    if(dataToSend.role === "") {
      dispatch(setStartLoadingTrue());
      alert("Please select role");
    }
    else{
      fetchData();
    }
  };

  console.log(dataToSend);

  return (
    <div
      className={`${styles.mainContainer} text-center flex flex-col p-20 pt-5 justify-center`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <div className="mx-auto w-full ">
        <div className="text-3xl mb-2">New user? Register here</div>
        <div className="grid grid-cols-3 max-[940px]:grid-cols-1 gap-1 justify-center items-start">
          <div className="col-span-1">
            <div
              className={`${styles.roleSelection} flex flex-wrap justify-center text-white mb-8`}
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
          <div className="col-span-2 bg-blue-300 rounded p-8">
            <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4">
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, firstName: event })}
                label="First name"
                type="text"
                placeholder="Enter First name"
              />
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, lastName: event })}
                label="Last name"
                type="text"
                placeholder="Enter Last name"
              />
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, username: event })}
                label="Username"
                type="text"
                placeholder="Enter Username"
              />
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, designation: event })}
                label="Designation"
                type="text"
                placeholder="Enter Designation"
              />
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, regdNo: event })}
                label="Regd. No"
                type="text"
                placeholder="Enter Regd. No"
              />
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, email: event })}
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, password: event })}
                label="Create password"
                type="password"
                placeholder="Enter password"
              />
              <InputField
                updateDataToSend={(event) => setDataToSend({ ...dataToSend, confirmPassword: event })}
                label="Re-enter password"
                type="password"
                placeholder="Re-enter password"
              />
            </div>
            <div className="mt-4">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
