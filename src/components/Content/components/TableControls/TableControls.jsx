import Button from "../../../ui/Button";
import SearchInput from "./SearchInput";
import Tab from "./Tab";

import "./TableControls.scss";

function TableControls() {
  return (
    <div className="table-controls">
      <Tab />
      <SearchInput />
      <Button className="table-controls__button">Печать</Button>
    </div>
  );
}

export default TableControls;
