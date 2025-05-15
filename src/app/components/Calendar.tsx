import { days } from "../data/weekdays";
import { CalendarButtons } from "./CalendarButtons";

export default function Calendar() {
  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Calendário dos dias do São João (30/05 - 06/07)
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
          <div
            key={day}
            className="text-center font-medium py-2 bg-gray-100 rounded-t"
          >
            {day}
          </div>
        ))}

        {days.map(({ day, month }) => {
          return <CalendarButtons day={day} month={month} key={""} />;
        })}
      </div>
    </div>
  );
}
