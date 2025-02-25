import { createContext, useState, useContext } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const Context = createContext({
  isOpen: false,
  setIsOpen: () => {},
  toggleSidebar: () => {},
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Context.Provider value={{ isOpen, setIsOpen, toggleSidebar }}>
      <Sidebar></Sidebar>
      <Content></Content>
    </Context.Provider>
  );
}

export default App;
export const useMyContext = () => useContext(Context);
