"use client";
import styles from "./signup.module.scss";
import { useState } from "react";
import InputField from "../InputField/Input-field.component";
import Button from "@/components/Button/button.component";
import RadioBtn from "@/components/RadioBtn/radio-btn.component";

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
      className={`${styles.mainContainer} text-center flex flex-col p-14 h-full justify-center`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <div className="mx-auto">
        <div className="text-3xl">New user? Register here</div>
        <div className="mx-auto">
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
          <div className="text-white bg-blue-300 min-w-1 max-w-96 rounded p-14">
            <InputField
              updateDataToSend={(e) => console.log(e)}
              label="First name"
              type="text"
            />
            <InputField
              updateDataToSend={(e) => console.log(e)}
              label="Last name"
              type="text"
            />
            <InputField
              updateDataToSend={(e) => console.log(e)}
              label="Regd. No"
              type="text"
            />
            <InputField
              updateDataToSend={(e) => console.log(e)}
              label="Email"
              type="email"
            />
            <InputField
              updateDataToSend={(e) => console.log(e)}
              label="Create password"
              type="password"
            />
            <InputField
              updateDataToSend={(e) => console.log(e)}
              label="Re-enter password"
              type="password"
            />
            <div className="">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
