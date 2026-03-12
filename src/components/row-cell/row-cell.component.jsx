import { memo } from "react";

import "./row-cell.styles.css";

const RowCell = ({ letter, style }) => {
  return (
    <div className={`cell ${letter ? "filled" : ""} border-${style}`}>
      {letter}
    </div>
  );
};

export default memo(RowCell);
