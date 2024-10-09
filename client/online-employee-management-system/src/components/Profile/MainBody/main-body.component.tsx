"use client";
import styles from "./main-body.module.scss";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { btnList } from "@/constants/Basic/data";

export default function MainBody(): JSX.Element {
  const { data } = useSelector((state: RootState) => state.authDetail);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gray-300 rounded-full p-4">
        <img className="w-32 h-32" src={btnList[8].base64Icon} alt="profile" />
      </div>
      <div
        className={`${styles.profileDetail} flex flex-col gap-2 my-4 text-lg font-semibold`}
      >
        <div>
          <div>Employee ID: </div>
          <div>{data?.employeeId}</div>
        </div>
        <div>
          <div>Name: </div>
          <div>
            {data?.firstName} {data?.lastName}
          </div>
        </div>
        <div>
          <div>Username: </div>
          <div>{data?.username}</div>
        </div>
        <div>
          <div>Email: </div>
          <div>{data?.email}</div>
        </div>
        <div>
          <div>Designation: </div>
          <div>{data?.designation}</div>
        </div>
        <div>
          <div>Regd No: </div>
          <div>{data?.regdNo}</div>
        </div>
        <div>
          <div>Gender: </div>
          <div>{data?.genderCode}</div>
        </div>
      </div>
    </div>
  );
}
