import "./Input.scss";
import PropTypes from "prop-types";

const Input = ({ placeholder }) => (
  <input className="input" type="text" placeholder={placeholder} />
);

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
