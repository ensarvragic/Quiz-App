import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTTIONS from  '../question.js'

export default function Question({
  key, 
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkip,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  })

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTTIONS[key].answers[0] === answer
      })
    }, 1000)
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkip} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
