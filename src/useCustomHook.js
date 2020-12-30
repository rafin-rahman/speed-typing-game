import { useState, useEffect, useRef } from "react";
function useCustomHook(startTime) {
  const timerVar = startTime;
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

  return {
    handleChange,
    calcWordNumber,
    onStartClick,
    isTimeRunning,
    text,
    timeRemaining,
    timerVar,
  };
}

export default useCustomHook;
