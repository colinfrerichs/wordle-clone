import { memo } from "react";

import BoardRow from "../board-row/board-row.component";

import "./board.styles.css";

const Board = ({ guesses, secretWord }) => {
  return (
    <div className="board-container">
      <div className="row-container">
        {guesses.map((guess, row) => (
          <BoardRow key={`row-${row}`} guess={guess} secretWord={secretWord} />
        ))}
      </div>
    </div>
  );
};

export default memo(Board);
