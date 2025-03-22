import { Container } from "react-bootstrap";
import "./style.css";
import ProfileHeader from "../Shared/ProfileHeader";
import PersonalInformation from "./components/personalInformation";
import ChangePassword from "./components/changePassword";

const InfoPage = () => {
  return (
    <Container className="info-page">
      <ProfileHeader />
      <PersonalInformation />
      <hr />
      <ChangePassword />
    </Container>
  );
};

export default InfoPage;
