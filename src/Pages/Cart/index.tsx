import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import CartItem from "./Components/CartItem";

const Cart = () => {
  return (
    <Container className="cart mb-3">
      <div className="title">
        <h1 className="page-title">Cart</h1>
      </div>
      <Row className="cart-content">
        <Col className="cart-items" md={9}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col className="cart-summary" md={3}>
          <div>
            <h1 className="title">Total</h1>
            <h4>99999L.E</h4>
            <button>Checkout</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
