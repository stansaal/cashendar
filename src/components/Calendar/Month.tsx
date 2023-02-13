import { getAllMonthDates, getMonthStart } from "../../utils";
import Cell from "./Cell";

interface IMonthProps {
  year: number;
  monthIndex: number;
}

const Month = (props: IMonthProps) => {
  const { year, monthIndex } = props;

  const monthStartDay = getMonthStart(year, monthIndex);
  const allMonthDates = getAllMonthDates(year, monthIndex);

  return (
    <div className="grid grid-cols-7 offset">
      {allMonthDates.map((date, dateIndex) => (
        <Cell
          key={`${year}-${monthIndex}-${date}`}
          style={dateIndex === 0 ? { gridColumnStart: monthStartDay } : undefined}
        >
          {date}
        </Cell>
      ))}
    </div>
  );
};

export default Month;
