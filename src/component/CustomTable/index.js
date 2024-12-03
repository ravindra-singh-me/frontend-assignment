import React, { useMemo, useState } from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";
import Pagination from "../Pagination";
import "./style.css";
function CustomTable({ columnData, rows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRowPerPage, setShowPerPage] = useState(5);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * showRowPerPage;
    const lastPageIndex = firstPageIndex + showRowPerPage;
    return rows?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, showRowPerPage, rows]);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handlePerChange = (value) => {
    setShowPerPage(+value);
  };

  return (
    <div className="table-wrapper">
      <>
        <table>
          <TableHeader columnData={columnData} />
          <TableBody columnData={columnData} rows={currentTableData} />
        </table>
        <Pagination
          onPageChange={handleChangePage}
          totalCount={rows?.length}
          currentPage={currentPage}
          showRowPerPage={showRowPerPage}
          handlePerChange={handlePerChange}
        />
      </>
    </div>
  );
}

export default CustomTable;
