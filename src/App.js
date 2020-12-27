import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const timerVar = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(timerVar);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  useEffect(() => {
    setTimeout(() => {
      if (isTimeRunning === true && timeRemaining !== 0) {
        setTimeRemaining((time) => time - 1);
      } else if (timeRemaining === 0) {
        setIsTimeRunning(false);
      }
    }, 1000);
  }, [timeRemaining, isTimeRunning]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(timerVar);
    }
  }, [isTimeRunning]);
  function calcWordNumber(words) {
    const number = words.trim().split(" ");
    const filteredWords = number.filter((word) => word !== "");
    console.log(filteredWords.length);
    return filteredWords.length;
  }

  function onStartClick() {
    setIsTimeRunning((prevState) => true);
    setText("");
  }

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
