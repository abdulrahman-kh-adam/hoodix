import ContactForm from "./Components/ContactForm";
import MensWear from "./Components/MensWear";
import NewArrivals from "./Components/NewArrivals";
import Slider from "./Components/Slider";
import WomensWear from "./Components/WomensWear";
import "./style.css";

const Home = () => {
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
