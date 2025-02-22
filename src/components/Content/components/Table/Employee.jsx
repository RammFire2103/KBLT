import callIcon from "../../../../assets/call.png";

import PropTypes from "prop-types";

function Employee({ employee }) {
  return (
    <tr>
      <td className="table__call">
        <a href={`tel:${employee.telephoneNum}`}>
          <img src={callIcon} />
        </a>
      </td>
      <td className="table__phone">{employee.telephoneNum}</td>
      <td className="table__name">{employee.fullName}</td>
      <td className="table__mail">{employee.mail}</td>
      <td className="table__address">{employee.address}</td>
    </tr>
  );
}

Employee.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    telephoneNum: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default Employee;
