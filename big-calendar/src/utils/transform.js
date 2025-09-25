import { parse } from "date-fns";
import { eventsByDate } from "../data/events";

export const generateCalendarEvents = () => {
  const events = [];
  Object.keys(eventsByDate).forEach((dateStr, index) => {
    const date = parse(dateStr, "dd-MM-yyyy", new Date());

    events.push({
      id: index + 1,
      title: `Data for ${dateStr}`,
      start: date,
      end: date,
      allDay: true,
      dateKey: dateStr,
    });
  });
  return events;
};
