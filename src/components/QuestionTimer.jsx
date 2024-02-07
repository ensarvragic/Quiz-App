import React, { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState();

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout])

  useEffect(() => {
    setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
      }, 100);
  }, [])

  return <progress id="question-time" max={timeout} value={remainingTime}/>;
}
