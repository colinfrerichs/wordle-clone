import { memo } from "react";

import RowCell from "../row-cell/row-cell.component";

import "./board-row.styles.css";

const BoardRow = ({ guess }) => {
  const letters = guess ? guess.split("") : [];

  return (
    <div className="cell-container">
      {Array.from({ length: 5 }).map((_, col) => (
        <RowCell key={`cell-${col}`} letter={letters[col]} />
      ))}
    </div>
  );
};

export default memo(BoardRow);
