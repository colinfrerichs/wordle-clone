import { memo } from "react";

import BoardRow from "../board-row/board-row.component";

import "./board.styles.css";

const Board = ({ guesses, secretWord }) => {
  return (
    <div className="board-container">
      {guesses.map((guess, row) => (
        <BoardRow key={`row-${row}`} guess={guess} secretWord={secretWord} />
      ))}
    </div>
  );
};

export default memo(Board);
