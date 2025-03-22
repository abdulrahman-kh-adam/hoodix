import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import BurgerMenu from "../BurgerMenu";
import { NavLink } from "react-router";
import cart from "../../../images/Shopping cart.svg";
import user from "../../../images/User Profile Circle.svg";

const Header = () => {
  const auth = false;

  return (
    <div className="header">
      <Container>
        <Row>
          <Col className="header-title" xs={6} lg={3}>
            <h1 className="text">Hoodix</h1>
          </Col>
          <Col className="header-menu" lg={6}>
            <ul className="nav-menu">
              <NavLink to="/" className="nav-link">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" className="nav-link">
                <li>About Us</li>
              </NavLink>
              <NavLink to="/hoodies" className="nav-link">
                <li>Hoodies</li>
              </NavLink>
            </ul>
          </Col>
          <Col className="header-auth" lg={3}>
            <ul className="nav-auth">
              {auth ? (
                <>
                  <NavLink to="/cart" style={{ textDecoration: "none", color: "#f5f5f5" }}>
                    <li style={{ fontWeight: "bold" }}>
                      <img src={cart} alt="Cart" className="me-2" />
                      Cart
                    </li>
                  </NavLink>
                  <li>
                    <img src={user} alt="User" width={45} height={45} />
                  </li>
                </>
              ) : (
                <>
                  <NavLink to="/login" style={{ textDecoration: "none", color: "#f5f5f5" }}>
                    <li>Login</li>
                  </NavLink>
                  <NavLink to="/register" style={{ textDecoration: "none", color: "#f5f5f5" }}>
                    <li>Register</li>
                  </NavLink>
                </>
              )}
            </ul>
          </Col>
          <Col className="header-burger" xs={6}>
            <BurgerMenu />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
