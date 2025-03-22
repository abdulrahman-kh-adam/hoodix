import { NavLink } from "react-router";
import "./style.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="title">
        <h1 className="page-title">Account Settings</h1>
      </div>
      <div className="menu">
        <div className="menu-item">
          <NavLink to="/profile/info" className="navlink">
            Personal Information
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/profile/shipping" className="navlink">
            Edit Shipping Address
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/profile/orders" className="navlink">
            My Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
