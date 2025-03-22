import { Col, Container, Row } from "react-bootstrap";
import instagram from "../../../images/Instagram.svg";
import facebook from "../../../images/Facebook.svg";
import twitter from "../../../images/Twitter.svg";
import "./style.css";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <p>All rights reserved for Hoodix</p>
          <p>Maadi, Cairo, Egypt</p>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <p>Follow Hoodix on:</p>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
