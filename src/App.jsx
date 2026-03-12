import { useState } from "react";
import { useRandomWord } from "./hooks/useRandomWord";

import Board from "./components/board/board.component";
import GuessInput from "./components/guess-input/guess-input.component";

import { getFeedback } from "./utility/getFeedback";

import "./App.css";

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(""));
  const [currentRow, setCurrentRow] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");

  const { randomWord, loading: secretWordIsLoading } = useRandomWord();

  const handleSubmit = (guess) => {
    if (currentRow > 6) return;

    const feedBack = getFeedback(guess, randomWord);
    setCurrentRow((prev) => prev + 1);
  };

  return (
    <div className="game-container">
      {secretWordIsLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Wordle Clone</h1>
          <Board guesses={guesses} />
          <GuessInput onSubmit={handleSubmit} disabled={gameOver} />
          {gameOver && <p>{gameOverMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
