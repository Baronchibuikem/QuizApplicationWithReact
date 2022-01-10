import React, { useState, useContext, useEffect } from "react";
import { QuizContext } from "../utils/contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");
  const { score, setScore, setGameState, questions } = useContext(QuizContext);

  const nextQuestion = (event) => {
    // set the score if answer is correct or not and increment the score by 1
    if (questions[currentQuestion].correct_answer === optionChoosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    // if finish button is pressed, set the score and reset the game state to endScreen
    if (questions[currentQuestion].correct_answer === optionChoosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="quiz">
      {Object.keys(questions).length > 0 ? (
        <div>
          <h4>{questions[currentQuestion].question}</h4>
          <div className="options">
            <button
              className="colorOption"
              id="A"
              onClick={(e) => setOptionChoosen("A")}
            >
              {questions[currentQuestion].optionA}
            </button>
            <button
              className="colorOption"
              onClick={() => setOptionChoosen("B")}
            >
              {questions[currentQuestion].optionB}
            </button>
            <button
              className="colorOption"
              onClick={() => setOptionChoosen("C")}
            >
              {questions[currentQuestion].optionC}
            </button>
            <button
              className="colorOption"
              onClick={(e) => setOptionChoosen("D")}
            >
              {questions[currentQuestion].optionD}
            </button>
          </div>
          {currentQuestion === Object.keys(questions).length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
          ) : (
            <button onClick={nextQuestion}>Next Question</button>
          )}
        </div>
      ) : (
        "No questions yet"
      )}
    </div>
  );
}

export default Quiz;
