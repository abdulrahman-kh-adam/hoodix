import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../../../Shared/Components/ProductCard";
import "./style.css";
import model from "../../../../images/model_man_black.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const MensWear = () => {
  const [visibleProducts, setVisibleProducts] = useState(4); // Default to 5 products

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1400) {
        setVisibleProducts(6); // Medium screens (768px or less)
      } else {
        setVisibleProducts(4); // Larger screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render only the visible number of ProductCards

  const productList = Array(visibleProducts)
    .fill(null)
    .map((_, index) => <ProductCard key={index} />);

  return (
    <Container>
      <Row>
        <Col lg={7} xxl={9}>
          <Row className="title">
            <h1 className="section-title">Men's Wear</h1>
          </Row>
          <Row>
            <div className="mens-wear-products">{productList}</div>
          </Row>
          <Row className="d-flex justify-content-center">
            <NavLink to="hoodies" className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
              <button>View All</button>
            </NavLink>
          </Row>
        </Col>
        <Col lg={5} xxl={3} className="d-flex justify-content-end align-items-end">
          <img src={model} alt="Model" className="model-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default MensWear;
