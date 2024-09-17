"use client";
import styles from "./signup.module.scss";
import { useState, useRef } from "react";
import InputField from "../InputField/Input-field.component";
import Button from "@/components/Button/button.component";

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
      previousRoleBtn.current.classList.remove("bg-blue-400");
    }
    const current = event.target as HTMLButtonElement;
    current.classList.add("bg-blue-400");
    setRole(current.textContent);
    console.log(current.textContent);

    previousRoleBtn.current = current;
  };

  console.log(props.searchParams.role);
  return (
    <div
      className={`${styles.mainContainer} text-center flex p-14 h-full overflow-scroll`}
    >
      <div className="text-left text-3xl">Back</div>
      <div className="mx-auto">
        <div className="text-3xl">New user ? Register here </div>
        <div className="mx-auto w-96">
          <div className={`${styles.roleSelection} flex justify-center`}>
            <Button onClick={(event) => handleRoleSelection(event)}>
              Admin
            </Button>
            <Button onClick={(event) => handleRoleSelection(event)}>
              Employee
            </Button>
          </div>
          <div className="text-white bg-blue-300 w-96 rounded p-14">
            <InputField label="First name" type="text" />
            <InputField label="Last name" type="text" />
            <InputField label="Regd. No" type="text" />
            <InputField label="Email" type="email" />
            <InputField label="Create password" type="password" />
            <InputField label="Re-enter password" type="password" />
            <div className="">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
