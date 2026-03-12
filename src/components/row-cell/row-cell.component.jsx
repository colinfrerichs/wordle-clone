import { memo } from "react";

const RowCell = ({ letter }) => {
  return <div className="cell">{letter}</div>;
};

export default memo(RowCell);
