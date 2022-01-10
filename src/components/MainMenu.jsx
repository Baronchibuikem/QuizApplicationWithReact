import React, { useContext } from "react";
import { QuizContext } from "../utils/contexts";
import "../App.css";

function EndScreen() {
  // used to display the first page of the quiz
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="quiz">
      <button className="" onClick={() => setGameState("quiz")}>
        Start Quiz
      </button>
    </div>
  );
}

export default EndScreen;
