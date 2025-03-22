import "./global.css";
import Header from "./Shared/Components/Header";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Shared/Components/Footer";
import Hoodies from "./Pages/Hoodies";
import Hoodie from "./Pages/Hoodie";
import Cart from "./Pages/Cart";
import LoginPage from "./Pages/Auth/Login";
import RegisterPage from "./Pages/Auth/Register";
import ResetPage from "./Pages/Auth/Reset";
import InfoPage from "./Pages/Profile/Info";
import ShippingAddress from "./Pages/Profile/Address";
import OrdersPage from "./Pages/Profile/Orders";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hoodies" element={<Hoodies />} />
        <Route path="hoodie/:id" element={<Hoodie />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset" element={<ResetPage />} />
        <Route path="profile" element={<Navigate to="/profile/info" />} />
        <Route path="profile/info" element={<InfoPage />} />
        <Route path="profile/shipping" element={<ShippingAddress />} />
        <Route path="profile/orders" element={<OrdersPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
