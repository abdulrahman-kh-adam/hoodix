import "./style.css";
import item_img from "../../../../images/reactangle.svg";
import { Col, Row } from "react-bootstrap";

const CartItem = () => {
  return (
    <Row className="cart-item">
      <Col className="cart-item-image" lg={4}>
        <img src={item_img} alt="product" />
      </Col>
      <Col className="cart-item-details" lg={8}>
        <div className="cart-item-name">Product Name</div>
        <div className="cart-item-size">Size: M</div>
        <div className="cart-item-color">Color: Gray</div>
        <div className="cart-item-quantity">
          <label className="me-2">Quantity:</label>
          <input type="number" />
        </div>
        <div className="cart-item-price">Price: $100.00</div>
        <div className="cart-item-total">Total: $100.00</div>
        <div className="cart-item-remove">
          <button>Remove</button>
        </div>
      </Col>
    </Row>
  );
};

export default CartItem;
