import { useState } from "react";
import { useRandomWord } from "./hooks/useRandomWord";

import Board from "./components/board/board.component";
import GuessInput from "./components/guess-input/guess-input.component";

import { getFeedback } from "./utility/getFeedback";

import "./App.css";

function App() {
  const createRow = () => ({
    word: "",
    letters: Array(5).fill(""),
    styles: Array(5).fill("white"),
  });

  const [guesses, setGuesses] = useState(Array.from({ length: 6 }, createRow));
  const [currentRow, setCurrentRow] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const { randomWord, loading: secretWordIsLoading } = useRandomWord();

  const handleSubmit = (guess) => {
    if (currentRow === 6) {
      setGameOverMessage(`Game over. Secret word was: ${randomWord}.`);
      setGameOver(true);
    }

    const formattedGuess = guess.toLowerCase().trim();
    const { wordLetters, styles } = getFeedback(formattedGuess, randomWord);

    setGuesses((prev) => {
      const next = [...prev];

      next[currentRow - 1] = {
        word: guess,
        letters: wordLetters,
        styles: styles,
      };

      return next;
    });
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
          <GuessInput onSubmit={handleSubmit} disableButton={gameOver} />
          {gameOver && <p>{gameOverMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
