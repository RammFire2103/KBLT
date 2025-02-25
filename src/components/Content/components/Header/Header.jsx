import Date from "./Date";
import Tab from "./Tab";
import Brand from "./Brand";
import ProfileIcon from "./ProfileIcon";

import "./Header.scss";
import Burger from "./Burger";

function Header() {
  return (
    <div className="header">
      <Burger />
      <Date />
      <Tab />
      <Brand />
      <ProfileIcon />
    </div>
  );
}

export default Header;
