import React, { useState, useEffect } from "react";
// import "../styles/SchedulerStep.scss";
import Week from "./Week";
import Time from "./Time";

const SchedulerStep2 = ({
  setSelected,
  meetingDuration,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
}) => {
  // const [error, setError] = useState(null);
  const [weekArray, setWeekArray] = useState(null);
  // const [url, setUrl] = useState(
  //   "/after/?" +
  //     new URLSearchParams({
  //       meetingDuration,
  //       date: new Date("2020-06-28").toJSON(),
  //     })
  // );
  const [url, setUrl] = useState(
    "https://ec-api-a.herokuapp.com/asap/?" +
      new URLSearchParams({ meetingDuration })
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setWeekArray(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setError(error);
          console.log("Error:", error);
        }
      );
  }, [url]);

  return (
    <div className="options-container">
      {weekArray && (
        <Week
          weekArray={weekArray}
          // availableDays={availableDays}
          // meetingDuration={meetingDuration}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      )}
      {weekArray && selectedDay && (
        <Time
          weekArray={weekArray}
          selectedDay={selectedDay}
          // selectedTime={selectedTime}
          // setSelectedTime={setSelectedTime}
        />
      )}
    </div>
  );
};
export default SchedulerStep2;
