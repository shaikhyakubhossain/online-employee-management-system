"use client";
import { useState } from "react";
import Button from "@/components/Button/button.component";
import styles from "./add-file.module.scss";

export default function AddFile() {

    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div className="relative flex">
            <div className="">
            <div className=" text-2xl font-semibold">Add File:</div>
            <input type="file" />
            </div>
            <Button onClick={() => setShowDropDown(!showDropDown)}>File Type</Button>
            <div className={`${styles.dropDown} absolute top-11 left-[250px] bg-gray-700 p-2 text-white rounded-md`} style={{ display: showDropDown ? "block" : "none" }}>
                <div className="text-xl font-semibold border-b-2 border-gray-400">Select Type: </div>
                <div>Study Materials (Notes)</div>
                <div>Interview Questions</div>
            </div>
        </div>
    );
}