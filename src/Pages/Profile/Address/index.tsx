import { Container } from "react-bootstrap";
import ProfileHeader from "../Shared/ProfileHeader";
import "./style.css";

const ShippingAddress = () => {
  return (
    <Container className="shipping-page">
      <ProfileHeader />
      <div className="shipping-address">
        <div className="title">
          <h1 className="page-title">Edit Shipping Address</h1>
        </div>
        <div className="info-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Country</label>
              <input type="text" id="country" name="country" />
            </div>
            <div className="form-group">
              <label htmlFor="name">State</label>
              <input type="text" id="state" name="state" />
            </div>
            <div className="form-group">
              <label htmlFor="name">City</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Street</label>
              <input type="text" id="street" name="street" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Building No.</label>
              <input type="text" id="building" name="building" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Apartment No.</label>
              <input type="text" id="apartment" name="apartment" />
            </div>
          </form>
          <button>Save</button>
        </div>
      </div>
    </Container>
  );
};

export default ShippingAddress;
