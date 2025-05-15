import { isToday } from "../funtions/aux";

export function CalendarButtons(props: CalendarButtonType) {
  const { day, month, ...otherProps } = props;
  const today = isToday(day, month);

  return (
    <div
      {...otherProps}
      className={`p-3 h-20 border rounded-lg flex flex-col 
        ${today ? "border-2 border-blue-500" : "border-gray-200"}
      `}
    >
      <span
        className={`text-sm font-medium 
        ${today ? "text-blue-800 font-bold" : ""}
      `}
      >
        {day}
      </span>
      <span className="text-xs mt-1 text-gray-500">
        {month.substring(0, 3)}
      </span>
    </div>
  );
}

interface CalendarButtonInterface {
  day: number;
  month: string;
  key: string
}

type CalendarButtonType = CalendarButtonInterface;
