import React, { useEffect, useState } from "react";

// Countdown component to show time left in hr:min:sec format
const Countdown = ({ timeLeft }) => {
  const [time, setTime] = useState(timeLeft);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // If there's no time left, stop the countdown
    if (time <= 0) {
      setIsExpired(true);
      return;
    }

    // Update the countdown every second
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1000); // Decrease by 1 second
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [time]);

  // Function to format time in hr:min:sec format
  const formatTime = (ms) => {
    const hours = String(Math.floor(ms / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(
      Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(Math.floor((ms % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="countdown">
      {!isExpired ? (
        <p className="text-lg flex space-x-2">
          <p className="text-textBlack font-bold">Claim in:</p>
          <p className="text-primaryGreen">{formatTime(time)}</p>
        </p>
      ) : (
        <p className="text-lg text-black">Time's up!</p>
      )}
    </div>
  );
};

export default Countdown;
