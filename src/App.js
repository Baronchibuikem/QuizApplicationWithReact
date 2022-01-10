import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./utils/contexts";
import useFetchData from "./hooks/useFetchData";

function App() {
  // fetch api data using our custom hook
  const questions = useFetchData();

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="app">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore, questions }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
