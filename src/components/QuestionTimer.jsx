import React, { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("helo timeout")
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout])

  useEffect(() => {
    console.log("helo interval")
    setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
      }, 100);
  }, [])

  return <progress id="question-time" max={timeout} value={remainingTime}/>;
}
