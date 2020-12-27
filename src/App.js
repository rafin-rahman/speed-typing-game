import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [startGame, setStartGame] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }
  function handleClick() {
    console.log("working");
    setStartGame((prevState) => (prevState = true));
  }
  useEffect(() => {
    if (startGame) {
      setTimeout(() => {
        if (timeRemaining !== 0) {
          setTimeRemaining((time) => time - 1);
        } else {
          return timeRemaining;
        }
      }, 1000);
    }
  }, [timeRemaining]);

  function calcWordNumber(words) {
    const number = words.trim().split(" ");
    const filteredWords = number.filter((word) => word !== "");
    console.log(filteredWords.length);
    return filteredWords.length;
  }

  return (
    <div className="App">
      <h1>HOW FAST CAN YOU TYPE?</h1>

      <textarea name={"text"} value={text} onChange={handleChange} />
      <h4>Time left: {timeRemaining}</h4>

      <button onClick={handleClick}>START</button>
      <h1>WORD COUNT: </h1>
    </div>
  );
}

export default App;
