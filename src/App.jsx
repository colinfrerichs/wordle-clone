import { useState } from "react";
import { useRandomWord } from "./hooks/useRandomWord";

import Board from "./components/board/board.component";
import GuessInput from "./components/guess-input/guess-input.component";

import "./App.css";

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentRow, setCurrentRow] = useState(0);

  const { randomWord, loading: secretWordIsLoading } = useRandomWord();

  const handleSubmit = (guess) => {};

  return (
    <div className="game-container">
      <Board guesses={guesses} />
      <GuessInput />
    </div>
  );
}

export default App;
