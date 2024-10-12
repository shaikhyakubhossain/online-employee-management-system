"use client";
import styles from "./signup.module.scss";
import { useState } from "react";
import InputField from "../InputField/Input-field.component";
import Button from "@/components/Button/button.component";
import RadioBtn from "@/components/RadioBtn/radio-btn.component";
import Link from "next/link";

type propsType = {
  searchParams: searchParamsType;
};

type searchParamsType = {
  type: string;
  role: string;
};

export default function SignUp(props: propsType) {
  const [role, setRole] = useState<null | string>(null);

  const handleRoleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = event.target as HTMLInputElement;
    if (current.nextSibling && current.nextSibling.textContent) {
      setRole(current.nextSibling.textContent.toLowerCase());
    }
  };

  console.log(props.searchParams.role, role);

  return (
    <div
      className={`${styles.mainContainer} text-center flex flex-col p-20 pt-10 justify-center`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <div className="mx-auto w-full ">
        <div className="text-3xl mb-8">New user? Register here</div>
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
                updateDataToSend={(e) => console.log(e)}
                label="First name"
                type="text"
                placeholder="Enter First name"
              />
              <InputField
                updateDataToSend={(e) => console.log(e)}
                label="Last name"
                type="text"
                placeholder="Enter Last name"
              />
              <InputField
                updateDataToSend={(e) => console.log(e)}
                label="Regd. No"
                type="text"
                placeholder="Enter Regd. No"
              />
              <InputField
                updateDataToSend={(e) => console.log(e)}
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <InputField
                updateDataToSend={(e) => console.log(e)}
                label="Create password"
                type="password"
                placeholder="Enter password"
              />
              <InputField
                updateDataToSend={(e) => console.log(e)}
                label="Re-enter password"
                type="password"
                placeholder="Re-enter password"
              />
            </div>
            <div className="mt-4">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
        <div>
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
