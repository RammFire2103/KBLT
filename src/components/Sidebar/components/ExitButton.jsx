import Button from "../../ui/Button";

import exit from "../../../assets/exit.png";

function ExitButton() {
  return (
    <Button>
      <img src={exit}></img>Выход
    </Button>
  );
}

export default ExitButton;
