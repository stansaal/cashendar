import { WEEKDAYS } from "../../utils";

const Weekdays = () => {
  return (
    <div className="grid grid-cols-7 sticky top-0 bg-white border-b border-gray-300 -mb-[1px]">
      {WEEKDAYS.map((weekday) => (
        <div className="flex justify-end p-1">{weekday}</div>
      ))}
    </div>
  );
};

export default Weekdays;
