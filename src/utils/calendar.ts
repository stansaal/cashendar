import { rangeGenerator } from "./common";

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getMonthStart = (year: number, monthIndex: number) => {
  const date = new Date(year, monthIndex);
  return date.getDay();
};

export const getMonthLength = (year: number, monthIndex: number) => {
  const date = new Date(year, monthIndex);
  date.setMonth(date.getMonth() + 1);
  const lastMonthDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  return lastMonthDate.getDate();
};

export const getAllMonthDates = (year: number, monthIndex: number) => {
  const monthLength = getMonthLength(year, monthIndex);
  return Array.from(rangeGenerator(1, monthLength));
};

const dateFormats = {
  "yyyy-mm-dd": {
    format: (date: Date | string | number) => {
      const dateClone = new Date(date);
      const year = dateClone.getFullYear();
      const month = String(dateClone.getMonth() + 1).padStart(2, "0");
      const day = String(dateClone.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
  },
};

const date = (pattern: keyof typeof dateFormats) => {
  return dateFormats[pattern];
};

export class Formatter {
  static date = date;
}

export const getDateRangeArray = (dateStart: string | number | Date, dateEnd: string | number | Date) => {
  const dateEndObj = new Date(dateEnd);
  const currentDateObj = new Date(dateStart);
  const dateArray = [];

  while (currentDateObj <= dateEndObj) {
    dateArray.push(Formatter.date("yyyy-mm-dd").format(currentDateObj));
    currentDateObj.setDate(currentDateObj.getDate() + 1);
  }

  return dateArray;
};
