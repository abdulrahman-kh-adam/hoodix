import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store"; // Adjust the path if necessary
import ContactForm from "./Components/ContactForm";
import MensWear from "./Components/MensWear";
import NewArrivals from "./Components/NewArrivals";
import Slider from "./Components/Slider";
import WomensWear from "./Components/WomensWear";
import "./style.css";
import { getAllProducts, ProductsState } from "../../Redux/productsSlice";
import { useEffect } from "react";

const Home = () => {
  const productsData = useSelector((state: ProductsState) => state.products);
  const productsLoading = useSelector((state: ProductsState) => state.loading);
  const productsError = useSelector((state: ProductsState) => state.error);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (productsLoading) {
      console.log("Loading products...");
    }
    if (productsError) {
      console.error("Error loading products:", productsError);
    }
    if (productsData) {
      console.log("Products data:", productsData);
    }
  }, [productsData, productsLoading, productsError]);

  return (
    <div className="home">
      <div className="slider">
        <Slider />
      </div>
      <div className="new-arrivals section">
        <NewArrivals />
      </div>
      <div className="mens-wear section">
        <MensWear />
      </div>
      <div className="womens-wear section">
        <WomensWear />
      </div>
      <div className="contact-form section">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
