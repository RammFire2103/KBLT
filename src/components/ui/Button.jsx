import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ children, variant, className, onClick = () => {} }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`button button--${variant} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
