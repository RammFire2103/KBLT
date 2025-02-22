import Button from "../../ui/Button";
import { PropTypes } from "prop-types";

function NavButton({ children, isCurrentPage = false }) {
  return (
    <Button
      className={
        isCurrentPage
          ? "sidebar__nav-button sidebar__nav-button--active"
          : "sidebar__nav-button"
      }
    >
      {children}
    </Button>
  );
}

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
  isCurrentPage: PropTypes.bool, // Исправил тип на bool
};

export default NavButton;
