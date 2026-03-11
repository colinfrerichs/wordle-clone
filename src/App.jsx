import { useRandomWord } from "./hooks/useRandomWord";

import Board from "./components/board/board.component";
import GuessInput from "./components/guess-input/guess-input.component";

import "./App.css";

function App() {
  const { randomWord, loading: secretWordIsLoading } = useRandomWord();

  const handleSubmit = (guess) => {};

  return (
    <div className="game-container">
      <Board />;
      <GuessInput />
    </div>
  );
}

export default App;
