import { memo, useState } from "react";

import "./guess-input.styles.css";

const GuessInput = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="input-container">
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        name="guess-input"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a guess."
        type="text"
        value={query}
      />
      <button className="guess-button" onClick={() => onSubmit(query)}>
        Guess
      </button>
    </div>
  );
};

export default memo(GuessInput);
