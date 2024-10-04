"use client";
import Section from "../Section/section.component";
import { useState, useEffect } from "react";
export default function MainBody() {

    const [data, setData] = useState<any>([]);

    return (
        <div>
            <Section title="Latest Notices" />
            <Section title="Other Notices" />
        </div>
    )
}