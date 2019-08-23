import React, {
  useRef,
  useState,
  useReducer,
  useEffect,
  useCallback
} from "react";
import Page from "../common/Page";

export default function() {
  return (
    <Page title="Stop watch">
      <StopWatch />
    </Page>
  );
}

function reducer(state, action) {
  switch (action) {
    case "start":
      if (state.status === "stopped") {
        const current = Date.now();
        return {
          startTime: current,
          endTime: current,
          status: "started"
        };
      }
      break;
    case "resume":
      if (state.status === "paused") {
        const { startTime, endTime } = state;
        const current = Date.now();
        const newStartTime = startTime + (current - endTime);
        return {
          startTime: new Date(newStartTime).getTime(),
          endTime: current,
          status: "started"
        };
      }
      break;
    case "stop":
      if (state.status === "started" || state.status === "paused") {
        return { startTime: null, endTime: null, status: "stopped" };
      }
      break;
    case "pause":
      if (state.status === "started") {
        return { ...state, status: "paused" };
      }
      break;
    case "tick":
      if (state.status === "started") {
        return { ...state, endTime: Date.now() };
      }
      break;
    default:
      break;
  }
  return state;
}

function useStopWatch(updateInterval) {
  const [state, dispatch] = useReducer(reducer, {
    startTime: null,
    endTime: null,
    status: "stopped"
  });
  const interval = useRef(null);
  const updateIntervalNum = +updateInterval || 10;
  const { startTime, endTime, status } = state;

  useEffect(() => {
    if (status === "started") {
      interval.current = setInterval(() => dispatch("tick"), updateIntervalNum);
      return () => clearInterval(interval.current);
    }
  }, [status, updateIntervalNum]);

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);

  const start = useCallback(() => dispatch("start"), []);
  const stop = useCallback(() => dispatch("stop"), []);
  const pause = useCallback(() => dispatch("pause"), []);
  const resume = useCallback(() => dispatch("resume"), []);

  const time = startTime != null && endTime != null ? endTime - startTime : 0;

  return {
    time,
    start,
    stop,
    resume,
    pause,
    status
  };
}

function StopWatch() {
  const [updateInterval, setUpdateInterval] = useState("10");
  const { time, start, stop, pause, resume, status } = useStopWatch(
    updateInterval
  );
  const btnClass = "btn btn-block mb-2 btn-light btn-lg";
  return (
    <>
      <div
        className="text-center bg-dark"
        style={{ padding: "20px", margin: "16px" }}
      >
        <h3>
          <Time time={time} />
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className={btnClass} onClick={start}>
              Start
            </button>
          </div>
          <div className="col">
            <button
              className={btnClass}
              onClick={status === "paused" ? resume : pause}
            >
              {status === "paused" ? "Resume" : "Pause"}
            </button>
          </div>
          <div className="col">
            <button className={btnClass} onClick={stop}>
              Stop
            </button>
          </div>
          <div className="col">
            <input
              className="form-control form-control-lg"
              value={updateInterval}
              onChange={e => setUpdateInterval(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Time(props) {
  const { time } = props; // Time in MS
  let rem = time;
  const ms = (rem % 1000) + "";
  rem = Math.floor(rem / 1000);

  const secs = (rem % 60) + "";
  rem = Math.floor(rem / 60);

  const min = (rem % 60) + "";
  rem = Math.floor(rem / 60);

  const hrs = (rem % 60) + "";

  return (
    <code className="text-white">
      {hrs.padStart(2, "0")}h {min.padStart(2, "0")}m {secs.padStart(2, "0")}s{" "}
      {ms.padStart(3, "0")}
    </code>
  );
}
