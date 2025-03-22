import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import hoodieImage from "../../images/reactangle.svg";
import { NavLink } from "react-router";

const Hoodie = () => {
  return (
    <Container className="hoodie-details">
      <div className="title">
        <h1 className="page-title">Hoodie Details</h1>
      </div>
      <Row className="hoodie-row">
        <Col className="img-col" xxl={4} xl={5} lg={6}>
          <img src={hoodieImage} alt="Hoodie Image" width={415} height={415} />
        </Col>
        <Col className="details-col" xxl={8} xl={7} lg={6}>
          <h3 className="hoodie-title">Men Hoodie</h3>
          <p className="hoodie-desc">
            Some details about this hoodie Some details about this hoodieSome details about this hoodieSome details
            about this hoodieSome details about this hoodieSome details about this hoodie.
          </p>
          <div className="size">
            <label htmlFor="size">Size:</label>
            <select name="size" id="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>
          <div className="color">
            <label htmlFor="color">Color:</label>
            <select name="color" id="color">
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
            </select>
          </div>
          <div className="price">
            <label htmlFor="price">Price:</label>
            <span>$50</span>
          </div>
          <div className="button">
            <NavLink to="/cart">
              <button>Add to Cart</button>
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hoodie;
