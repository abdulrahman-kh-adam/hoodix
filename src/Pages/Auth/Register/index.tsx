import { Container } from "react-bootstrap";
import "./style.css";

const RegisterPage = () => {
  return (
    <Container className="login-container">
      <div className="login-title">
        <h1>Register</h1>
      </div>
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone Number</label>
            <input type="text" id="number" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="repassword">Repeat Password</label>
            <input type="password" id="repassword" placeholder="Repeat Password" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
