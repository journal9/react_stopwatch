import classes from "./TimerControls.module.css";

function TimerControls({
  toggleTimerOn,
  toggleTimerPaused,
  onStatus,
  pauseStatus,
  resetHandle,
  resumeHandle,
}) {
  return (
    <div className={classes.btns_container}>
      <div className={classes.btn_box}>
        {!onStatus && (
          <button className={classes.btn} onClick={toggleTimerOn}>
            start
          </button>
        )}
        {onStatus && !pauseStatus && (
          <button className={classes.btn} onClick={toggleTimerPaused}>
            pause
          </button>
        )}
        {pauseStatus && (
          <button className={classes.btn} onClick={resumeHandle}>
            resume
          </button>
        )}
        {pauseStatus && onStatus && (
          <button className={classes.btn} onClick={resetHandle}>
            reset
          </button>
        )}
      </div>
    </div>
  );
}

export default TimerControls;
