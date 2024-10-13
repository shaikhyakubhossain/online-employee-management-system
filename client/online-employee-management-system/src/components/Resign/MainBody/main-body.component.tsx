"use client";
import GiveResignation from "../GiveResignation/give-resignation.component";
import ApproveResignation from "../ApproveResignation/approve-resignation.component";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Resign() {

    const { role } = useSelector((state: RootState) => state.authDetail);

    return (
        <div className="font-times">
            {
                role === "admin" ? <ApproveResignation /> : <GiveResignation />
            }
        </div>
    );
}