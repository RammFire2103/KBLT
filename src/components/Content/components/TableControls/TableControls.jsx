import Button from "../../../ui/Button";
import SearchInput from "./SearchInput";
import Tab from "./Tab";

import "./TableControls.scss";

function TableControls() {
  function print() {
    window.print();
  }

  return (
    <div className="table-controls">
      <Tab />
      <SearchInput />
      <Button className="table-controls__button" onClick={() => print()}>
        Печать
      </Button>
    </div>
  );
}

export default TableControls;
