import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import hoodie_1 from "../../../../images/hoodie_1.svg";
import hoodie_2 from "../../../../images/model_man_black.svg";
import hoodie_3 from "../../../../images/model_man_white.svg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slider-item">
          <Container>
            <Row>
              <Col className="slider-item-left">
                <h1 className="slider-item-title">New Collection!</h1>
                <h1 className="slider-item-subtitle">Checkout our brand new hoodies</h1>
                <p className="slider-item-content">
                  <ul>
                    <li>Starts from 499L.E only!</li>
                    <li>Buy 1 get 1 free</li>
                    <li>Limited offer</li>
                  </ul>
                </p>
              </Col>
              <Col className="slider-item-right">
                <img className="slider-item-image" src={hoodie_1} alt="slider" />
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-item">
          <Container>
            <Row>
              <Col className="slider-item-left">
                <h1 className="slider-item-title">New Year Offers!</h1>
                <h1 className="slider-item-subtitle">Begin 2025 with our new offers</h1>
                <p className="slider-item-content">
                  <ul>
                    <li>50% Off any hoodie!</li>
                    <li>Earn cashback.</li>
                    <li>Limited offer.</li>
                  </ul>
                </p>
              </Col>
              <Col className="slider-item-right">
                <img className="slider-item-image" src={hoodie_2} alt="slider" />
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-item">
          <Container>
            <Row>
              <Col className="slider-item-left">
                <h1 className="slider-item-title">New Year Offers!</h1>
                <h1 className="slider-item-subtitle">Begin 2025 with our new offers</h1>
                <p className="slider-item-content">
                  <ul>
                    <li>50% Off any hoodie!</li>
                    <li>Earn cashback.</li>
                    <li>Limited offer.</li>
                  </ul>
                </p>
              </Col>
              <Col className="slider-item-right">
                <img className="slider-item-image" src={hoodie_3} alt="slider" />
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
