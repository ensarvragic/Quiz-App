import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTTIONS from "../question.js";

export default function Question({
  key,
  onSelectAnswer,
  onSkip,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTTIONS[key].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000);
    }, 1000);
  };

  const answerState = "";

  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkip} />
      <h2>{QUESTTIONS[key].text}</h2>
      <Answers
        answers={QUESTTIONS[key].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
