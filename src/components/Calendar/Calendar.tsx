import { MONTHS, getDateRangeArray } from "../../utils";
import Cell from "./Cell";
import Weekdays from "./Weekdays";

interface ICalendarProps {
  dateStart: string | number | Date;
  dateEnd: string | number | Date;
}

const Calendar = (props: ICalendarProps) => {
  const { dateStart, dateEnd } = props;

  const dates = getDateRangeArray(dateStart, dateEnd);

  const startWeekday = new Date(dates[0]).getDay();

  return (
    <div className="relative">
      <Weekdays />
      <div className="grid grid-cols-7 offset">
        {dates.map((date, dateIndex) => {
          const dateObj = new Date(date);
          const dayOfMonth = dateObj.getDate();
          const monthIndex = dateObj.getMonth();
          const monthName = MONTHS[monthIndex];
          const year = dateObj.getFullYear();

          return (
            <Cell key={date} style={dateIndex === 0 ? { gridColumnStart: startWeekday } : undefined}>
              <div className="text-right">
                <div>
                  {dayOfMonth}
                  {dayOfMonth === 1 || dateIndex === 0 ? ` ${monthName}` : null}
                </div>
                {(monthIndex === 0 && dayOfMonth === 1) || dateIndex === 0 ? <div>{year}</div> : null}
              </div>
            </Cell>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
