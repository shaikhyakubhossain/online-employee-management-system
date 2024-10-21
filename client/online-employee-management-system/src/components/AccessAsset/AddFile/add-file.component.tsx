"use client";
import { useState } from "react";
import Button from "@/components/Button/button.component";
import styles from "./add-file.module.scss";

export default function AddFile() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={`${styles.mainContainer} relative flex`}>
      <div className=" text-2xl font-semibold m-2">Add File:</div>
      <Button onClick={() => setShowDropDown(!showDropDown)} customTW="m-2">File Type</Button>
      <div
        className={`${styles.dropDown} absolute top-14 left-[120px] bg-white border-gray-400 border p-2 text-black rounded-md`}
        style={{ display: showDropDown ? "block" : "none" }}
      >
        <div className="text-xl font-semibold border-b-2 border-gray-400">
          Select Type:{" "}
        </div>
        <div>Study Materials (Notes)</div>
        <div>Interview Questions</div>
      </div>
      <input className="m-2 self-center" type="file" />
    </div>
  );
}
