"use client";
import styles from "./signup.module.scss";
import { useState, useRef } from "react";
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
  const previousRoleBtn = useRef<null | HTMLButtonElement>(null);

  const handleRoleSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (previousRoleBtn.current) {
      previousRoleBtn.current.style.backgroundColor = "lightblue";
    }
    const current = event.target as HTMLButtonElement;
    current.style.backgroundColor = "blue";
    setRole(current.textContent);
    console.log(current.textContent);

    previousRoleBtn.current = current;
  };

  console.log(props.searchParams.role, role);
  return (
    <div
      className={`${styles.mainContainer} text-center flex p-14 h-full overflow-scroll`}
    >
      <div className="text-left text-3xl">Back</div>
      <div className="mx-auto">
        <div className="text-3xl">New user ? Register here </div>
        <div className="mx-auto w-96">
          <div className={`${styles.roleSelection} flex justify-center text-white`}>
            <RadioBtn label="Admin" />
            <RadioBtn label="Employee" />
          </div>
          <div className="text-white bg-blue-300 w-96 rounded p-14">
            <InputField updateDataToSend={(e) => console.log(e)} label="First name" type="text" />
            <InputField updateDataToSend={(e) => console.log(e)} label="Last name" type="text" />
            <InputField updateDataToSend={(e) => console.log(e)} label="Regd. No" type="text" />
            <InputField updateDataToSend={(e) => console.log(e)} label="Email" type="email" />
            <InputField updateDataToSend={(e) => console.log(e)} label="Create password" type="password" />
            <InputField updateDataToSend={(e) => console.log(e)} label="Re-enter password" type="password" />
            <div className="">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
