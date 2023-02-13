import { rangeGenerator } from "./common";

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
