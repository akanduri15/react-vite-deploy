import React, { useContext } from "react";
import { QuizContext } from "../context/quiz-context";
import Question from "./question";
import Result from "./result";

const Quiz = () => {
  const { quizData, currentQuestion } = useContext(QuizContext);


  if (currentQuestion >= quizData.length) {
    return <Result />;
  } else {
    return <Question />;
  }
};

export default Quiz;