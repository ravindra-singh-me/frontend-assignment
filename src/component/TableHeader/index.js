import React from "react";
import "./style.css";

function TableHeader({ columnData }) {
  return (
    <thead>
      <tr className="table-head-row">
        {columnData.map((item) => {
          return (
            <th className={"tableHeader"} key={item.field}>
              {item.headerName}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
