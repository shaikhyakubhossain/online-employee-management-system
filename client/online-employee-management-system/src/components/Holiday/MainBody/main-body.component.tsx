"use client";
import { useState, useEffect } from "react";
import BigCalendar from "@/components/Holiday/BigCalendar/big-calendar.component";
import type { Holiday } from "@/constants/Types/response-data";
import List from "@/components/Holiday/List/list.component";
import SelectedHoliday from "@/components/Holiday/SelectedHoliday/selected-holiday.component";

export default function MainBody(): JSX.Element {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedHoliday, setSelectedHoliday] = useState<string | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  const fetchHolidays = async () => {
    try {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/2024/US`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setHolidays(data);
    } catch (error) {
      console.error("Error fetching holidays:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHolidays();
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="text-center my-auto">Loading holidays...</div>
      ) : (
        <div>
          <List holidays={holidays} />
          <SelectedHoliday selectedHoliday={selectedHoliday} />

          <BigCalendar handleNavigate={(event) => setDate(event)} handleEventClick={(event) => setSelectedHoliday(event.title)} date={date} calenderEvents={holidays} />

        </div>
      )}
    </div>
  );
}
