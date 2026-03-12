import { memo } from "react";

import RowCell from "../row-cell/row-cell.component";

import "./board-row.styles.css";

const BoardRow = ({ guess }) => {
  const letters = guess ? guess.split("") : Array(5).fill("");
  console.log(letters);

  return (
    <div className="row-container">
      {letters.map((letter, col) => (
        <RowCell key={`cell-${col}`} letter={letter} />
      ))}
    </div>
  );
};

export default memo(BoardRow);
