"use client";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface Holiday {
  name: string;
  date: string;
  localName: string;
}

export default function Holiday(): JSX.Element {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedHoliday, setSelectedHoliday] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());

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

  const handleEventClick = (event: { title: string }) => {
    setSelectedHoliday(event.title);
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const events = holidays.map((holiday) => ({
    title: holiday.name,
    start: new Date(holiday.date),
    end: new Date(holiday.date),
  }));

  return (
    <div className="">
      <div className="text-5xl mb-12 font-semibold border-b-2 border-gray-800 text-blue-900">
        Holiday List
      </div>
      {loading ? (
        <div className="text-center my-auto">Loading holidays...</div>
      ) : (
        <>
          <div className="mb-8">
            {holidays.map((holiday, index): JSX.Element => (
              <div key={index} className="py-1">
                <strong>{new Date(holiday.date).toDateString()}:</strong>{" "}
                {holiday.localName}
              </div>
            ))}
          </div>

          {selectedHoliday && (
            <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">
              <p>
                <strong>Selected Holiday:</strong> {selectedHoliday}
              </p>
            </div>
          )}

          <div className="w-full h-96 bg-white rounded-lg shadow-lg p-4">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%", width: "100%" }}
              className="rounded-lg"
              views={["month"]}
              date={date}
              onNavigate={handleNavigate}
              onSelectEvent={handleEventClick}
            />
          </div>
        </>
      )}
    </div>
  );
}
