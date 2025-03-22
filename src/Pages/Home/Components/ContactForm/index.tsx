import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const ContactForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="section-title" style={{ color: "#060624", marginTop: "0", fontSize: "40px" }}>
            Want a specific design?
          </h1>
          <p className="section-description">
            Don’t hesitate to contact us!
            <br /> We can make a hoodie with your own design or design a hoodie as you like.
          </p>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input type="phone" />
            </div>
          </form>
          <div className="d-flex justify-content-center mt-4">
            <button>Request Contact</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
