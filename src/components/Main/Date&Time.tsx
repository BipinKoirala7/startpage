import { useEffect, useState } from "react";

function DateAndTime() {
  const [time, setTime] = useState("");
  const [today_date, setTodayDate] = useState("");
  const [today_day, setTodayDay] = useState("");

  useEffect(() => {
    const date = new Date();
    const dateString = date.toDateString();

    const arr = dateString.split(" ");
    setTodayDay(getDayFullString(arr[0]));
    setTodayDate(arr[2] + " " + getDateFullString(arr[1]) + " " + arr[3]);

    setInterval(() => {
      const timedateObj = new Date();
      setTime(
        timedateObj.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second:"2-digit"
        })
      );
    }, 1000);
  }, []);

  function getDateFullString(date_string: string): string {
    let fullString;
    switch (date_string) {
      case "Jan":
        fullString = "January";
        break;
      case "Feb":
        fullString = "February";
        break;
      case "Mar":
        fullString = "March";
        break;
      case "Apr":
        fullString = "April";
        break;
      case "May":
        fullString = "May";
        break;
      case "Jun":
        fullString = "June";
        break;
      case "Jul":
        fullString = "July";
        break;
      case "Aug":
        fullString = "August";
        break;
      case "Sep":
        fullString = "September";
        break;
      case "Oct":
        fullString = "October";
        break;
      case "Nov":
        fullString = "November";
        break;
      case "Dec":
        fullString = "December";
        break;
      default:
        fullString = "Holiday";
        break;
    }
    return fullString;
  }

  function getDayFullString(day: string): string {
    let fullString;
    switch (day) {
      case "Sun":
        fullString = "Sunday";
        break;
      case "Mon":
        fullString = "Monday";
        break;
      case "Tue":
        fullString = "Tuesday";
        break;
      case "Wed":
        fullString = "Wednesday";
        break;
      case "Thu":
        fullString = "Thursday";
        break;
      case "Fri":
        fullString = "Friday";
        break;
      case "Sat":
        fullString = "Saturday";
        break;
      default:
        fullString = "Holiday";
        break;
    }
    return fullString;
  }
  return (
    <div className="grid grid-rows-[1fr_auto]  rounded-[.25rem] overflow-hidden  w-fit items-center justify-center">
      <div
        className="grid grid-cols-2  justify-between
      text-[2rem]
      sm:text-[2rem]
      lg:text-[3rem]
      "
      >
        <p className="flex items-center justify-center ">{time}</p>
        <p className="flex items-center justify-center">{today_day}</p>
      </div>
      <div className="grid grid-cols-2  w-full justify-center items-center">
        <p className="flex items-center justify-center">2081 Mangsir 16th</p>
        <p className="flex items-center justify-center">{today_date}</p>
      </div>
    </div>
  );
}

export default DateAndTime;
