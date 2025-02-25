import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ children, disabled, className, onClick = () => {} }) => {
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className={`button ${className} ${disabled ? "button-disabled" : ""}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
