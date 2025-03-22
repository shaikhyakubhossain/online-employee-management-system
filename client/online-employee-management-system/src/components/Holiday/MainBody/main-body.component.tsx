"use client";
import { useState, useEffect } from "react";
import BigCalendar from "@/components/BigCalendar/big-calendar.component";
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
        `https://date.nager.at/api/v3/PublicHolidays/2025/US`
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
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-4xl p-6 bg-gray-100 shadow-lg rounded-xl border">
        <BigCalendar
          handleNavigate={(event) => setDate(event)}
          handleEventClick={(event) => setSelectedHoliday(event.title)}
          date={date}
          calenderEvents={holidays}
        />
      </div>

      <div className="w-full max-w-3xl mt-6">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-3">
          List of Holidays
        </h2>

        {loading ? (
          <div className="text-center text-gray-500 py-4 animate-pulse">
            Fetching holidays...
          </div>
        ) : (
          <div className="p-4 bg-gray-100 shadow-md rounded-lg">
            <SelectedHoliday selectedHoliday={selectedHoliday} />
            <List holidays={holidays} />
          </div>
        )}
      </div>
    </div>
  );
}
