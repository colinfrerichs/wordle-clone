import { memo } from "react";

import BoardRow from "../board-row/board-row.component";

import "./board.styles.css";

const Board = ({ guesses }) => {
  return (
    <div className="board-container">
      {guesses.map(({ letters, styles }, row) => (
        <BoardRow key={`row-${row}`} letters={letters} styles={styles} />
      ))}
    </div>
  );
};

export default memo(Board);
