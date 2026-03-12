import { memo } from "react";

import RowCell from "../row-cell/row-cell.component";

import "./board-row.styles.css";

const BoardRow = ({ letters, styles }) => {
  return (
    <div className="row-container">
      {letters.map((letter, col) => (
        <RowCell key={`cell-${col}`} letter={letter} style={styles[col]} />
      ))}
    </div>
  );
};

export default memo(BoardRow);
