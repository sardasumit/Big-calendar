import { useState } from "react";
import CalendarView from "./components/CalendarView";
import Modal from "./components/Modal";
import BarGraph from "./components/BarGraph";
import { generateCalendarEvents } from "./utils/transform";
import { eventsByDate } from "./data/events";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const events = generateCalendarEvents();

  
  const handleSelectEvent = (event) => {
  const dateKey = event.dateKey;
  const rawData = eventsByDate[dateKey] || [];

 
  const data = rawData.map(item => {
    const key = Object.keys(item)[0];
    return { user: key, value: item[key] };
  });

  setSelectedData(data);
  setSelectedDate(dateKey);
  setIsModalOpen(true);
};


  
  const handleSelectSlot = ({ start }) => {
    const dateKey = start.toLocaleDateString("en-GB").split("/").join("-"); 
    

    const data = eventsByDate[dateKey] || [];

    console.log("Slot Click →", dateKey, data);

    setSelectedData(data);
    setSelectedDate(dateKey);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
        React Big Calendar with Bar Graph
      </h1>
      <CalendarView
        events={events}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot} 
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-2">
          Data for {selectedDate}
        </h2>
        <BarGraph data={selectedData} />
      </Modal>
    </div>
  );
}
