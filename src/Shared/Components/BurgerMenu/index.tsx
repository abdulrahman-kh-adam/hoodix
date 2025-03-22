import { NavLink } from "react-router";
import "./style.css";

const BurgerMenu = () => {
  const showMenu = () => {
    const menu = document.querySelector(".burger-menu");
    const icon = document.querySelector(".burger-icon");

    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");

      // Remove 'hide' class after animation ends
      setTimeout(() => {
        menu.classList.remove("hide");
      }, 400); // Match the animation duration
    } else {
      menu?.classList.add("show");
    }
    icon?.classList.toggle("active");
  };

  return (
    <div>
      <div className="burger-icon" onClick={showMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="burger-menu">
        <ul>
          <NavLink to="/" className="nav-link">
            <li onClick={showMenu}>Home</li>
          </NavLink>
          <NavLink to="/about" className="nav-link">
            <li onClick={showMenu}>About Us</li>
          </NavLink>
          <NavLink to="/hoodies" className="nav-link">
            <li onClick={showMenu}>Hoodies</li>
          </NavLink>
          <NavLink to="/login" className="nav-link">
            <li onClick={showMenu}>Login</li>
          </NavLink>
          <NavLink to="/register" className="nav-link">
            <li onClick={showMenu}>Register</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
