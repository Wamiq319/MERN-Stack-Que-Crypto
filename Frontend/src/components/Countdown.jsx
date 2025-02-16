import React, { useEffect, useState } from "react";

const Countdown = ({
  timeLeft,
  format = "default",
  showText = true, // New prop to control visibility of text
  digitColor = "text-secondaryBlue", // Default color for digits
  textColor = "text-gray-500", // Default color for text
  digitSize = "text-4xl", // Default size for digits
  textSize = "text-lg", // Default size for text
}) => {
  const [time, setTime] = useState(timeLeft);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (time <= 0) {
      setIsExpired(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1000); // Decrease by 1 second
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  // Function to format time based on the specified format
  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30); // Approximate months

    return { days, hours, minutes, seconds, months };
  };

  const { days, hours, minutes, seconds, months } = formatTime(time);

  // Render based on format
  const renderCountdown = () => {
    switch (format) {
      case "monthly":
        return (
          <>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{months}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Months</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{days}</h1>
              {showText && <h1 className={`${textColor} ${textSize}`}>Days</h1>}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{hours}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Hours</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{minutes}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Minutes</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{seconds}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Seconds</h1>
              )}
            </span>
          </>
        );
      case "day":
        return (
          <>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{days}</h1>
              {showText && <h1 className={`${textColor} ${textSize}`}>Days</h1>}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{hours}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Hours</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{minutes}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Minutes</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{seconds}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Seconds</h1>
              )}
            </span>
          </>
        );
      case "hour":
        return (
          <>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{hours}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Hours</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{minutes}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Minutes</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{seconds}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Seconds</h1>
              )}
            </span>
          </>
        );
      default:
        return (
          <>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{days}</h1>
              {showText && <h1 className={`${textColor} ${textSize}`}>Days</h1>}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{hours}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Hours</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{minutes}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Minutes</h1>
              )}
            </span>
            <span className="flex flex-col items-center">
              <h1 className={`${digitColor} ${digitSize}`}>{seconds}</h1>
              {showText && (
                <h1 className={`${textColor} ${textSize}`}>Seconds</h1>
              )}
            </span>
          </>
        );
    }
  };

  return (
    <div className="countdown flex space-x-4">
      {!isExpired ? (
        <div className="flex space-x-4">{renderCountdown()}</div>
      ) : (
        <p className={`${digitColor} ${digitSize}`}>00:00:00</p>
      )}
    </div>
  );
};

export default Countdown;
