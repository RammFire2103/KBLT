import PropTypes from "prop-types";
import Button from "../../../ui/Button";

function Pagination({ employeesPerPage, totalEmployees, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <Button className="pagination__link" onClick={() => paginate(number)}>
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
};

export default Pagination;
