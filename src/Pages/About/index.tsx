import { Container } from "react-bootstrap";
import rectangle from "../../images/reactangle.svg";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <Container>
        <div className="title">
          <h1 className="page-title">About Hoodix</h1>
        </div>
        <div className="story">
          <h1 className="section-title">Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit sed lectus eu facilisis. Pellentesque
            tristique ultrices ante a efficitur. Etiam suscipit mauris purus, eu pellentesque nulla ornare sed. Fusce
            feugiat massa et urna sollicitudin efficitur. Donec lacinia nunc at leo elementum, ac laoreet nisl placerat.
            Nam at urna semper, bibendum diam vitae, pulvinar erat. Phasellus tincidunt nisi est. Integer dapibus
            euismod nisl, eu tempus elit iaculis id. Donec lacinia erat facilisis, viverra lorem et, consequat purus.
            Quisque convallis venenatis mollis. Vivamus a ex id tortor convallis aliquam id vitae ligula. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam nisl lectus, posuere eu
            tortor ut, eleifend fringilla quam.
          </p>
        </div>
        <div className="team">
          <h1 className="section-title">Our Creative Team</h1>
          <div className="team-members">
            <div className="team-member">
              <img src={rectangle} alt="team-member" />
              <p>John Doe</p>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src={rectangle} alt="team-member" />
              <p>John Doe</p>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src={rectangle} alt="team-member" />
              <p>John Doe</p>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src={rectangle} alt="team-member" />
              <p>John Doe</p>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div className="partners">
          <h1 className="section-title">Our Partners</h1>
          <div className="partner-logos">
            <img src={rectangle} alt="partner-logo" />
            <img src={rectangle} alt="partner-logo" />
            <img src={rectangle} alt="partner-logo" />
            <img src={rectangle} alt="partner-logo" />
          </div>
        </div>
      </Container>
      <div className="contact">
        <Container className="contact-container">
          <p className="first">Do You Have Outstanding Skills?</p>
          <p className="second">If you are a Graphics Designer, Marketing Specialist or Social Media Expert,</p>
          <p className="third">YOU CAN JOIN US!</p>
          <p className="forth">Feel free to send your CV on:</p>
          <p className="fifth">hoodixbrandegy@gmail.com</p>
        </Container>
      </div>
    </div>
  );
};

export default About;
