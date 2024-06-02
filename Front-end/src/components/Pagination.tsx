import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    number: number
  ) => {
    event.preventDefault();
    paginate(number);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="page-controls">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-items">
            <a
              onClick={(event) => handlePageClick(event, number)}
              href="#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
