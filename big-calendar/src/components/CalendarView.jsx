import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarView({ events, onSelectEvent, onSelectSlot }) {
  return (
    <div className="h-[600px] bg-white rounded-lg shadow p-2">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable 
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        style={{ height: "100%" }}
      />
    </div>
  );
}
