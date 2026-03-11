import { memo } from "react";

import BoardRow from "../board-row/board-row.component";

/*
  so a board is composed of rows - so, it should have 6 rows to mimic the game.
*/

const Board = () => {
  return (
    <div className="board-container">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={`row-${idx}`} className="row-container">
          <BoardRow />
        </div>
      ))}
    </div>
  );
};

export default memo(Board);
