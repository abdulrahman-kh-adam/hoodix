import "./style.css";
import rectangle from "../../../images/reactangle.svg";
import { NavLink } from "react-router";

const ProductCard = () => {
  return (
    <NavLink
      to="/hoodie/1234567890"
      className="d-flex justify-content-center"
      style={{ textDecoration: "none", color: "#f5f5f5" }}
    >
      <div className="product-card">
        <img src={rectangle} alt="product" />
        <h3>Product Name</h3>
        <p>$10.00</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
