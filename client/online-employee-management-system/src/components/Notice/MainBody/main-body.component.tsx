"use client";
import Section from "../Section/section.component";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainBody() {

    const { role } = useSelector((state: RootState) => state.authDetail);

    return (
        <div>
            {
                role === "admin" && (
                    <div className="text-lg my-6"><span className="text-red-500 bg-slate-200 p-3 rounded-lg cursor-pointer hover:bg-slate-300">Add Notice</span></div>
                )
            }
            <Section title="Latest Notices" />
            <Section title="Other Notices" />
        </div>
    )
}