import React from "react";
import useCustomHook from "./useCustomHook";
import "./style.css";

function App() {
  const {
    handleChange,
    calcWordNumber,
    onStartClick,
    isTimeRunning,
    text,
    timeRemaining,
    timerVar,
  } = useCustomHook(2);
  return (
    <div className="App">
      <h1>HOW FAST CAN YOU TYPE?</h1>

      <textarea
        disabled={!isTimeRunning}
        readOnly={!isTimeRunning}
        name={"text"}
        value={text}
        onChange={handleChange}
      />
      <h4>Time left: {timeRemaining}</h4>

      <button onClick={onStartClick} disabled={isTimeRunning}>
        START
      </button>
      <h1>
        WORD COUNT:{" "}
        {timeRemaining === 0 || timeRemaining === timerVar
          ? calcWordNumber(text)
          : "--"}
      </h1>
    </div>
  );
}

export default App;
