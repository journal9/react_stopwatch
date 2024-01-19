import classes from "./WatchWrapper.module.css";
import Timer from "../Timer_screen/Timer";
import TimerControls from "../button_controls/TimerControls";
import { useEffect, useState } from "react";

function WatchWrapper() {
  const [timerOn, setTimerOn] = useState(false);
  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState(0);

  const timerToggleOn = () => {
    setTimerOn(true);
  };
  const timerToggleRst = () => {
    setTimerOn(false);
    setPaused(false);
    setTime(0);
  };
  const timerPaused = () => {
    setPaused(true);
  };
  const timerResumed = () => {
    setPaused(false);
  };

  useEffect(() => {
    if (timerOn && !paused) {
      let interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [timerOn, paused]);

  return (
    <div className={classes.wrapper}>
      <Timer timer={time} />
      <TimerControls
        toggleTimerOn={timerToggleOn}
        toggleTimerPaused={timerPaused}
        onStatus={timerOn}
        pauseStatus={paused}
        resetHandle={timerToggleRst}
        resumeHandle={timerResumed}
      />
    </div>
  );
}

export default WatchWrapper;
