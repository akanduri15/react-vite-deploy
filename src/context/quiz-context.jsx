import React, { createContext, useState } from "react";


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

  const quizData = [
    {
      question: "Who holds the record for the most points scored in a single NBA Game?",
      options: ["Kobe Bryant", "Wilt Chamberlin", "Michael Jordan", "Lebron James"],
      answer: "Wilt Chamberlin",
    },
    {
      question: "Which NBA team has won the most championships?",
      options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
      answer: "Boston Celtics",
    },
    {
      question: "In what year did LeBron James win his first NBA Championship?",
      options: ["2009", "2010", "2012", "2013"],
      answer: "2012",
    },
    {
      question: "Which player is nicknamed The Greek Freak?",
      options: ["Luka Dončić", "Nikola Jokić", "Giannis Antetokounmpo", "Kristaps Porziņģis"],
      answer: "Giannis Antetokounmpo",
    },
    {
      question: "Who was the first player to be unanimously voted NBA MVP?",
      options: ["Lebron James", "Steph Curry", "Shaquille O'Neal", "Kevin Durant"],
      answer: "Steph Curry",
    },
    {
      question: "What team drafted Kobe Bryant in 1996 before trading him to the Lakers?",
      options: ["Charlotte Hornets", "Philadelphia 76ers", "Denver Nuggets", "Boston Celtics"],
      answer: "Charlotte Hornets",
    },
    {
      question: "Which NBA player is known for the famous phrase “Anything is possible!” after winning the 2008 NBA Finals?",
      options: ["Paul Pierce", "Kevin Garnett", "Ray Allen", "Rajon Rondo"],
      answer: "Kevin Garnett",
    },
  ];

  
  const initialAnswers = quizData.map(() => null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  
  const setAnswerForQuestion = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };


  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(quizData.map(() => null));
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setAnswerForQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};