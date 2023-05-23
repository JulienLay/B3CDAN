import React, { useState } from "react";
import { useInterval } from "./useInterval";

export default function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);

  const textColor = "#FF0000";

  useInterval(() => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
  }, 1000);

  const formatTime = (time: number) => {
    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor((time / 3600) % 24);
    const days = Math.floor((time / 86400) % 365);
    const years = Math.floor(time / 31536000);

    const formattedTime = [];
    if (years > 0) {
      formattedTime.push(`${years} ${years === 1 ? "year" : "years"}`);
    }
    if (days > 0) {
      formattedTime.push(`${days} ${days === 1 ? "day" : "days"}`);
    }
    if (hours > 0) {
      formattedTime.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
    }
    if (minutes > 0) {
      formattedTime.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);
    }
    if (seconds > 0) {
      formattedTime.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);
    }

    return formattedTime.join(", ");
  };

  return (
    <p style={{ color: textColor, fontSize: 18 }}>{formatTime(elapsedTime)}</p>
  );
}
