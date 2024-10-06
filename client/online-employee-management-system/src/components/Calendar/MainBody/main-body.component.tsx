"use client";
import { useState } from "react";
import BigCalendar from "@/components/BigCalendar/big-calendar.component";

export default function MainBody(): JSX.Element {
    const [date, setDate] = useState<Date>(new Date());
    return (
        <div>
            <BigCalendar handleNavigate={(event) => setDate(event)} date={date} /> 
        </div>
    )
}