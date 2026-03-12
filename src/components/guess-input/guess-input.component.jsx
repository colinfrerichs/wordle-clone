import { memo, useState } from "react";

import "./guess-input.styles.css";

const GuessInput = ({ onSubmit, disableButton }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="input-container">
      <input
        id="guess-input"
        maxLength={5}
        name="guess-input"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a guess."
        type="text"
        value={query}
      />
      <button
        className="guess-button"
        disabled={disableButton || query.length !== 5}
        onClick={() => onSubmit(query)}
      >
        Guess
      </button>
    </div>
  );
};

export default memo(GuessInput);
