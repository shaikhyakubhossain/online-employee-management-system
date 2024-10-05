"use client";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface HolidayState {
  holidays: { name: string; date: string; localName: string }[];
  loading: boolean;
  selectedHoliday: string | null;
  date: Date;
}

class Holiday extends React.Component<{}, HolidayState> {
  constructor(props: any) {
    super(props);
    this.state = {
      holidays: [],
      loading: true,
      selectedHoliday: null,
      date: new Date(),
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/2024/US`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the data to check its structure
      this.setState({ holidays: data });
    } catch (error) {
      console.error("Error fetching holidays:", error);
    } finally {
      this.setState({ loading: false });
    }
  }

  handleEventClick = (event: { title: string }) => {
    this.setState({ selectedHoliday: event.title });
  };

  handleNavigate = (newDate: Date) => {
    this.setState({ date: newDate });
  };

  render() {
    const { holidays, loading, selectedHoliday, date } = this.state;

    // Convert holidays to calendar event format
    const events = holidays.map((holiday) => ({
      title: holiday.name,
      start: new Date(holiday.date),
      end: new Date(holiday.date),
    }));

    return (
      <div className="">
        <h1 className="text-5xl mb-12 font-semibold border-b-2 border-gray-800 text-blue-900">
          Holiday List
        </h1>
        <p className="mb-6">
          Welcome to the Holiday Page. Here you can find information about
          public holidays for the year 2024.
        </p>

        {/* Loading indicator */}
        {loading ? (
          <p>Loading holidays...</p>
        ) : (
          <>
            {/* List of Holidays */}
            <ul className="mb-8">
              {holidays.map((holiday, index) => (
                <li key={index} className="py-1">
                  <strong>{new Date(holiday.date).toDateString()}:</strong>{" "}
                  {holiday.localName}{" "}
                  {/* Change to localName as per Date Nager API response */}
                </li>
              ))}
            </ul>

            {/* Show selected holiday detail */}
            {selectedHoliday && (
              <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">
                <p>
                  <strong>Selected Holiday:</strong> {selectedHoliday}
                </p>
              </div>
            )}

            {/* Calendar with Holidays */}
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
                onNavigate={this.handleNavigate}
                onSelectEvent={this.handleEventClick} // Handle click on events
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Holiday;
