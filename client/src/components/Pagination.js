import React from 'react';
import '../style/pagination.css'
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className='pagination'>
      <button className='pageStyle'
        style={{ backgroundColor: currentPage === 1 ? 'lightgray' : 'white', marginRight: '10px' }}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumbers.map((page) => (
        <button className='pageStyle'
          key={page}
          style={{ backgroundColor: page === currentPage ? 'lightblue' : 'white' }}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button className='pageStyle'
        style={{ marginLeft: '10px' }}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
