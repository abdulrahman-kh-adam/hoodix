import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../../../Shared/Components/ProductCard";
import "./style.css";
import model from "../../../../images/model_woman_black.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const WomensWear = () => {
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
        <Row className="title">
          <h1 className="section-title">Women's Wear</h1>
        </Row>
        <Col lg={5} xxl={3} className="d-flex justify-content-center align-items-center">
          <img src={model} alt="Model" className="model-img" />
        </Col>
        <Col lg={7} xxl={9}>
          <Row>
            <div className="womens-wear-products">{productList}</div>
          </Row>
          <Row className="d-flex justify-content-center">
            <NavLink to="hoodies" className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
              <button>View All</button>
            </NavLink>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default WomensWear;
