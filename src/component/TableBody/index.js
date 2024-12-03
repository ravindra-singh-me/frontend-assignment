import React from "react";
import "./style.css";
function TableBody({ rows, columnData }) {
  return (
    <tbody>
      {rows?.map((row) => {
        return (
          <tr className="table-row">
            {columnData?.map((column) => {
              return (
                <td className={"table-column"} key={column.field}>
                  {row[column.field]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
