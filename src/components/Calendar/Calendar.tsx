import Month from "./Month";

const Calendar = () => {
  const currentDate = new Date();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return (
    <>
      <Month {...{ monthIndex, year }} />
    </>
  );
};

export default Calendar;
