import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage?: number;
}

const CustomPagination: React.FC<PaginationProps> = ({ pageCount, onPageChange, currentPage = 0 }) => {
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      forcePage={currentPage ? currentPage - 1 : 0}
    />
  );
};

export default CustomPagination;
