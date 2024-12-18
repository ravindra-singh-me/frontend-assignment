import React from "react";
import clsx from "clsx";
import { usePagination, DOTS } from "../../hooks/usePagination";
import "./style.css";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    showRowPerPage,
    handlePerChange,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    showRowPerPage,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="pagination-main-container">
      <ul className={"pagination-container"}>
        {/* Left navigation arrow */}
        <li
          className={clsx("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          // Render our Page Pills
          return (
            <li
              className={clsx("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={clsx("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
      <select onChange={(e) => handlePerChange(e.target.value)}>
        {[5, 10, 15].map((option) => (
          <option key={option} value={option}>
            {option} rows per page
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
