import { memo } from "react";

import RowCell from "../row-cell/row-cell.component";

const BoardRow = () => {
  {
    Array.from({ length: 5 }).map((_, idx) => (
      <div key={`cell-${idx}`} className="cell-container">
        <RowCell />
      </div>
    ));
  }
};

export default memo(BoardRow);
