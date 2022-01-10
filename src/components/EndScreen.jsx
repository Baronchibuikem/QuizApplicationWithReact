import React, { useContext } from "react";
import { QuizContext } from "../utils/contexts";

function EndScreen() {
  const { score, setScore, setGameState, questions } = useContext(QuizContext);

  // resart the quiz when the resart button is clicked
  const resartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="endscreen">
      <h1>Quiz Finished</h1>
      <h4>
        Total Score : {score} / {Object.keys(questions).length}{" "}
      </h4>
      <button onClick={resartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
