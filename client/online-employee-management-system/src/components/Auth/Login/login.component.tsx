"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button/button.component";
import InputField from "../InputField/Input-field.component";
import { getUrl } from "@/constants/url";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";

type propsType = {
  searchParams: searchParamsType
}

type searchParamsType = {
  role: string
}

export default function Login(props: propsType) {

  const router = useRouter();
  const dispatch = useDispatch();

  const [dataToSend, setDataToSend] = useState({employeeId: "", password: ""});

  const handleSubmit = () => {

    fetch(`${getUrl()}/${props.searchParams.role}-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if(!data.error){
          dispatch(setDetail({data: data.data, token: data.token}));
          localStorage.setItem("token", data.token);
          router.push(`/Dashboard`);
      }
      else{
        alert(data.error);
      }
    })
    })
    .catch((error) => {
      console.log(error);
    })

    console.log(dataToSend);
  }

  useEffect(() => {
    console.log(props.searchParams);
  },[])

  return (
    <div className="text-center p-4">
      <div className="text-2xl text-left">Back</div>
      <div>
        <div className="text-3xl my-4">{props.searchParams.role} Login</div>
        <div className="bg-blue-300 w-96 rounded mx-auto p-10">
          <InputField updateDataToSend={(data) => setDataToSend({...dataToSend, employeeId: data})} label={props.searchParams.role + " ID"} type="text" placeholder={"Enter " + props.searchParams.role + " ID"}/>
          <InputField updateDataToSend={(data) => setDataToSend({...dataToSend, password: data})} label={"Password"} type="password" placeholder={"Enter password"}/>
          <div className="mt-14">
            <Button onClick={handleSubmit}>Enter</Button>
          </div>
        </div>
        <div>
          Do not have an account ? Click here to &nbsp;
          <Link className="text-blue-200" href={"/Auth?type=signup&role=Admin"}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}
