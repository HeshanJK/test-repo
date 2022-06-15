import React, { useState, useRef, useEffect } from "react";

function CountDown({initialTime}) {
  const hoursMinSecs = { hours: initialTime[0], minutes: initialTime[1], seconds: initialTime[2] };
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  const [started, setStarted] = useState(false);
  
  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    if (started) {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    }
  });

  return (

    <>
      <td className="p-4 w-1/4">
        <button
          class=" btn btn-primary font-bold btn-lg"
          onClick={() => {
            setStarted(true);
          }}
        >
          Start
        </button>
      </td>
      <td className="p-4 w-1/4">
        <button
          class="btn btn-success font-bold btn-lg"
          onClick={() => {
            setStarted(false);
          }}
        >
          Finished
        </button>
      </td>
      <td className="p-4 w-1/4">
        <div className="countdown">
          <p>
            {`${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}
          </p>
        </div>
      </td>
    </>
  );
}

export default CountDown;
