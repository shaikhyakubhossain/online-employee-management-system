"use client";
import styles from "./signup.module.scss";
import Link from "next/link";
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
      className={`${styles.mainContainer} text-center flex p-14 h-full overflow-scroll`}
      style={{ fontFamily: "Lora, serif" }} // Apply Google font here
    >
      <img
        className="absolute top-0 left-0 w-full -z-10"
        style={{ height: "100vh" }}
        src={`https://drive.google.com/thumbnail?id=1BjLxXodycVILUUQ4rKuaNdcWVFqGG085`}
        alt=""
      />
      <Link href={"/"}>
        <div className="text-xl text-left absolute left-0 pl-2">Go back</div>
      </Link>
      <div className="mx-auto">
        <div className="text-3xl">New user? Register here</div>
        <div className="mx-auto w-96">
          <div
            className={`${styles.roleSelection} flex justify-center text-white`}
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
          <div className="text-white bg-blue-300 w-96 rounded p-14">
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
