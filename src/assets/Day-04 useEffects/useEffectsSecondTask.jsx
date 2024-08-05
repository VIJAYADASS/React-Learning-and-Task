import { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10); // Start from 10 seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(10);
  };

  return (
    <div>
      <h1>{timeLeft > 0 ? timeLeft : "Time's up!"}</h1>
      <button
        className="useEffectSndTask"
        onClick={startTimer}
        disabled={isActive}
      >
        Start
      </button>
      <button className="useEffectSndTask" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default CountdownTimer;
