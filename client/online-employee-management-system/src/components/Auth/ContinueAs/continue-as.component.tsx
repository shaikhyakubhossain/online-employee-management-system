"use client";
import Button from "@/components/Button/button.component";
import Link from "next/link";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type propsType = {
    customTW?: string;
};

export default function ContinueAs(props: propsType): JSX.Element {
  const { token, data } = useSelector((state: RootState) => state.authDetail);

  return (
    <>
      {token ? (
        <Link href={"/Dashboard"}>
          <Button customTW={props.customTW}>Continue as { data?.firstName + " " + data?.lastName }</Button>
        </Link>
      ) : (
        <Link href={"/Auth?type=singup&role=employee"}>
          <Button customTW={props.customTW}>Sign Up</Button>
        </Link>
      )}
    </>
  );
}
