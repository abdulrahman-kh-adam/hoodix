import { Container } from "react-bootstrap";
import ProfileHeader from "../Shared/ProfileHeader";
import "./style.css";
import Order from "./Components/Order";

const OrdersPage = () => {
  return (
    <Container>
      <ProfileHeader />
      <div className="orders-page">
        <div className="title">
          <h1 className="page-title">My Orders</h1>
        </div>
        <div className="orders">
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </Container>
  );
};

export default OrdersPage;
