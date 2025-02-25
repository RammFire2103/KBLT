import { useMyContext } from "../../../../App";
import Button from "../../../ui/Button";

//Кнопка для бургерного меню

function Burger() {
  //Открытие сайдбара
  const { toggleSidebar } = useMyContext();

  return (
    <div className="header__burger-wrapper">
      <Button className="header__burger" onClick={toggleSidebar}>
        ☰
      </Button>
    </div>
  );
}

export default Burger;
