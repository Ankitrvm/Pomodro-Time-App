import { useState, useEffect } from "react";

import classes from "./TimerDiv.module.css";
import Button from "../button/Button";

const TimerDiv = () => {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    if (seconds === 0 && !isBreak) {
      setIsActive(false);
      setIsBreak(true);
      setSeconds(5 * 60);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds, isBreak]);

  const startHandler = () => {
    setIsActive(true);
    setIsBreak(false);
  };

  const pauseHandler = () => {
    setIsActive(false);
  };

  const resetHandler = () => {
    setIsActive(false);
    setIsBreak(false);
    setSeconds(25 * 60);
  };

  const timeFormate = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={classes["main-container"]}>
      <h1>Pomodro timer app</h1>
      <p className={classes.timer}>{timeFormate(seconds)}</p>
      <div className={classes.button}>
        <Button onClick={startHandler}>Start</Button>
        <Button onClick={pauseHandler}>Pause</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </div>
    </div>
  );
};
export default TimerDiv;
