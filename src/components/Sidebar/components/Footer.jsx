import ExitButton from "./ExitButton";

const Footer = () => {
  return (
    <div className="sidebar__footer">
      <div className="sidebar__footer-text">
        <p>Техническая поддержка:</p>
        <a href="tel:88613001010">8 (861) 300-10-10</a>
        <br />
        <a href="tel:88003331730">8 800 333-17-30</a>
      </div>
      <ExitButton />
    </div>
  );
};

export default Footer;
