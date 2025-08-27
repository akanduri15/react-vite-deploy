import { useState } from "react";
import Results from "./result";


function Quiz() {
 const questionBank = [
   {
     question: "Which player holds the record for the most career points scored in the NBA?",
     options: ["Michael Jordan", " LeBron James", " Kareem Abdul-Jabbar", "Kobe Bryant"],
     answer: "Kareem Abdul-Jabbar",
   },
   {
     question: "Who is the only player to win NBA MVP in six different seasons?",
     options: ["Bill Russell", "LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar"],
     answer: "Kareem Abdul-Jabbar",
   },
   {
     question: "What city did the Lakers franchise originate in before moving to Los Angeles?",
     options: [" Minneapolis", "Seattle", " Boston", "Philadelphia"],
     answer: "Minneapolis",
   },
   {
     question: "Which NBA team has won the most championships?",
     options: [" Chicago Bulls", "Boston Celtics", " Los Angeles Lakers", "Golden State Warriors"],
     answer: "Boston Celtics",
   },   
   {
     question: "What is the name of the trophy awarded to the NBA Finals winner?",
     options: ["Larry O'Brien Championship Trophy", "Maurice Podoloff Trophy", "Bill Russell NBA Finals MVP Award", "Walter A. Brown Trophy"],
     answer: " Larry O'Brien Championship Trophy",
   },
   {
     question: " Which player has the most career assists in NBA history?",
     options: ["Magic Johnson", " John Stockton", "Jason Kidd", "Chris Paul"],
     answer: "John Stockton",
   },
   {
     question: " What is the distance of the three-point line from the basket at its farthest point?",
     options: ["22 feet", "23 feet, 9 inches", "25 feet", "23 feet, 6 inches"],
     answer: "23 feet, 9 inches",
   },       


 ];


 const initialAnswers = [null, null, null, null, null, null, null]
 const [userAnswers, setUsersAnswers] = useState(initialAnswers);
 const [currentQuestion, setCurrentQuestion] = useState(0);


 const [isQuizFinished, setIsQuizFinished] = useState(false)


 const selectedAnswer = userAnswers[currentQuestion]


 function handleSelectOption (option) {
   const newUserAnswers = [...userAnswers];
   newUserAnswers[currentQuestion] = option;


   setUsersAnswers(newUserAnswers)
 }


 function goToNext() {
   if(currentQuestion === questionBank.length-1){
       setIsQuizFinished(true)
   }else{
   setCurrentQuestion(currentQuestion + 1);
   }
}


 function goToPrev() {
   if (currentQuestion > 0) {
     setCurrentQuestion(currentQuestion - 1);
   }
 }


 function restartQuiz() {
   setUsersAnswers(initialAnswers);
   setCurrentQuestion(0);
   setIsQuizFinished(false);
 }
 if (isQuizFinished) {
   return (
       <Results
           userAnswers={userAnswers}
           questionBank={questionBank}
           restartQuiz={restartQuiz}
       />
   );
 }
 return (
   <div>
       <h2> Question {currentQuestion+1} </h2>
       <p className = "question"> {questionBank[currentQuestion].question} </p>


       {questionBank[currentQuestion].options.map((option) => (
           <button
               className={"option" + (selectedAnswer === option ? " selected" : "")}
               onClick={() => handleSelectOption(option)}
           >
               {option}
           </button>
       ))}


       <div className = "nav-buttons">
           <button onClick = {goToPrev} disabled = {currentQuestion === 0 }>
               Previous
           </button>
           <button onClick = {goToNext} disabled = {!selectedAnswer}>
                   {currentQuestion === questionBank.length - 1
                   ? "Finish Quiz"
                   : "Next Question"}
           </button>
       </div>


   </div>
 )
 };


export default Quiz;