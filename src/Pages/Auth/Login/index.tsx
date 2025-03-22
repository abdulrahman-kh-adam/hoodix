import { Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router";

const LoginPage = () => {
  return (
    <Container className="login-container">
      <div className="login-title">
        <h1>Login</h1>
      </div>
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
          <br />
          <br />
          <NavLink to="/reset">Forgot your password?</NavLink>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
