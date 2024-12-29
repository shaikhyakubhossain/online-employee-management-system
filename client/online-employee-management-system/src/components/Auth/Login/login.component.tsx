"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Button from "@/components/Button/button.component";
import InputField from "../InputField/Input-field.component";
import Toast from "@/components/Toast/toast.component";
import { getUrl } from "@/constants/url";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";
import {
  setStartLoadingTrue,
  setStartLoadingFalse,
} from "@/lib/features/MainLoading/mainLoadingSlice";

type propsType = {
  searchParams: searchParamsType;
};

type searchParamsType = {
  role: string;
};

export default function Login(props: propsType) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [dataToSend, setDataToSend] = useState({
    username: "",
    password: "",
  });
  const [toast, setToast] = useState<boolean>(false);

  const errorMessageRef = useRef<string | null>(null);

  const handleSubmit = () => {
    dispatch(setStartLoadingTrue());
    fetch(`${getUrl()}/${props.searchParams.role}-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => {
        res.json().then((data) => {
          dispatch(setStartLoadingFalse());
          if (!data.error) {
            dispatch(setDetail(data));
            localStorage.setItem("OEMS-authDetail", JSON.stringify(data));
            router.push(`/Dashboard`);
          } else {
            errorMessageRef.current = data.error;
            setToast(true);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(setStartLoadingFalse());
      });
  };

  return (
    <div className="text-center p-4" style={{ fontFamily: "Lora, serif" }}>
      <Toast show={toast} message={errorMessageRef.current} hide={() => setToast(false)} />
      <div className="">
        <div className="text-3xl my-4 capitalize">
          {props.searchParams.role} Login
        </div>
        <div className="bg-blue-300 min-w-1 max-w-96 rounded mx-auto p-10">
          <InputField
            updateDataToSend={(data) =>
              setDataToSend({ ...dataToSend, username: data })
            }
            label={props.searchParams.role + " username"}
            type="text"
            placeholder={"Enter " + props.searchParams.role + " username"}
          />
          <InputField
            updateDataToSend={(data) =>
              setDataToSend({ ...dataToSend, password: data })
            }
            label={"Password"}
            type="password"
            placeholder={"Enter password"}
          />
          <div className="mt-14">
            <Button onClick={handleSubmit}>Enter</Button>
          </div>
        </div>
        <div>
          Do not have an account? Click here to &nbsp;
          <Link className="text-blue-200" href={"/Auth?type=signup"}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
