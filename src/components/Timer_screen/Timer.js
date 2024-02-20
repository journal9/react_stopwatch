import classes from './Timer.module.css';
function Timer({timer}){
    console.log(timer)
    return(
        <div className={classes.timer_template}>
            <span>{("0" + Math.floor((timer / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((timer / 100) % 60)).slice(-2)}:</span>
            <span>{(timer%1000).toString().slice(-2)}</span>
        </div>
    )
}

export default Timer;