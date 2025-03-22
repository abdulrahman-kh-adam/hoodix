import { Container } from "react-bootstrap";

const ResetPage = () => {
  return (
    <Container className="login-container">
      <div className="login-title">
        <h1>Reset Your Password</h1>
      </div>
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPage;
