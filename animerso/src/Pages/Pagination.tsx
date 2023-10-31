import React, { useState } from 'react';

interface PaginationProps {
   totalItems: number;
   itemsPerPage: number;
   onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    };
  
    return (
      <div>
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    );
  };
export default Pagination;