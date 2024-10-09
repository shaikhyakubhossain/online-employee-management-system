import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./big-calender.custom.css";
import type { Holiday } from "@/constants/Types/response-data";

type propsType = {
    handleNavigate?: (newDate: Date) => void;
    handleEventClick?: (event: { title: string }) => void;
    date: Date;
    calenderEvents?: Holiday[] | null;
}

const localizer = momentLocalizer(moment);

export default function BigCalendar(props: propsType) {
    
      const events = props.calenderEvents?.map((holiday) => ({
        title: holiday.name,
        start: new Date(holiday.date),
        end: new Date(holiday.date),
      }));

    return (
        <div className="w-full h-96 bg-white rounded-lg shadow-lg p-4">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%", width: "100%" }}
              className="rounded-lg"
              views={["month"]}
              date={props.date}
              onNavigate={props.handleNavigate}
              onSelectEvent={props.handleEventClick}
            />
          </div>
    )
}