import PropTypes from "prop-types";
import Button from "../../../ui/Button";

function Pagination({
  employeesPerPage,
  totalEmployees,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <Button
            className={
              currentPage === number
                ? "pagination__link pagination__link--active"
                : "pagination__link"
            }
            disabled={currentPage === number}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        </li>
      ))}
    </ul>
  );
}

Pagination.propTypes = {
  employeesPerPage: PropTypes.number,
  totalEmployees: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
