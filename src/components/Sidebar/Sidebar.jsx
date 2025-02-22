import { useState } from "react";
import Logo from "./components/Logo";
import NavButton from "./components/NavButton";
import "./Sidebar.scss";
import employees from "../../assets/employees.png";
import Footer from "./components/Footer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Кнопка-бургер */}
      <button className="sidebar__burger" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Сайдбар */}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <Logo />
        <nav className="sidebar__nav">
          <ul>
            <li>
              <NavButton isCurrentPage={true}>
                <img src={employees} alt="Сотрудники" />
                <span>Сотрудники</span>
              </NavButton>
            </li>
          </ul>
        </nav>
        <Footer />
      </aside>

      {/* Оверлей для затемнения контента */}
      {isOpen && (
        <div className="sidebar__overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;
