import Input from "../../../ui/Input";

import searchIcon from "../../../../assets/search.png";
import Button from "../../../ui/Button";

function SearchInput() {
  return (
    <div className="table-controls__search">
      <Input placeholder="Найти по имени"></Input>
      <Button className="table-controls__search-button">
        <img src={searchIcon} />
      </Button>
    </div>
  );
}

export default SearchInput;
