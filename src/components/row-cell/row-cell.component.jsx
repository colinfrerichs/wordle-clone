import { memo } from "react";

import "./row-cell.styles.css";

const RowCell = ({ letter }) => {
  return <div className={`cell ${letter ? "filled" : ""}`}>{letter}</div>;
};

export default memo(RowCell);
