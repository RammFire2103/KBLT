import Date from "./Date";
import Tab from "./Tab";
import Brand from "./Brand";
import ProfileIcon from "./ProfileIcon";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Date />
      <Tab />
      <Brand />
      <ProfileIcon />
    </div>
  );
}

export default Header;
