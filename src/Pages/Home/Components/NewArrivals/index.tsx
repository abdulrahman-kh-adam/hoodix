import { Container, Row } from "react-bootstrap";
import ProductCard from "../../../../Shared/Components/ProductCard";
import "./style.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const NewArrivals = () => {
  const [visibleProducts, setVisibleProducts] = useState(4); // Default to 5 products

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1400) {
        setVisibleProducts(4); // Medium screens (768px or less)
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
      <Row className="title">
        <h1 className="section-title">New Arrivals</h1>
      </Row>
      <Row className="products">{productList}</Row>
      <Row className="button">
        <NavLink
          to="hoodies"
          className="d-flex justify-content-center"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <button>View All</button>
        </NavLink>
      </Row>
    </Container>
  );
};

export default NewArrivals;
